class Task {
  result = null;
  canceled = false;
  constructor(params) {
    this.caller = params;
  }
  start() {
    this.result = Promise((resolve, reject) => {
      if (this.canceled) {
        
      }
    })
  }
  cancel() {
    // thi
  }
}

function mockFetch(params) {
  return new Promise.then((res, rej) => {
    setTimeout(() => {
      console.log('fetch success');
      res();
    }, 2000);
  })
}

const task = new Task(mockFetch);
task.start();
task.result.then((res) => {
  console.log('# task complete', res);
}).catch(err => {
  if (err.aborted) {
    console.log('# task aborted');
  } else {
    console.log('# task error', err);
  }
});

// cancel task
setTimeout(() => {
  task.cancel();
}, 1000)


class Task {
  _aborted = false;
  _complete = false;
  _result = null;
  caller = null;
  result = null;

  constructor(caller) {
    this.caller = caller;
  }

  start() {
    this._result = this.caller().then(
      (res) => {
        if (!this._aborted) this._complete = true;
        return res;
      },
      (err) => {
        if (!this._aborted) this._complete = true
        throw err;
      }
    );
    this._setResult();
  }

  cancel() {
    this._aborted = true;
  }

  _setResult() {
    this.result = Promise.race([this._result, this._setWatcher()])
  }

  _setWatcher() {
    return new Promise((resolve, reject) => {
      // console.log('call _setWatcher');
      setTimeout(() => {
        // console.log('checked:', + new Date());
        if (this._complete) resolve();
        else if (this._aborted) reject({ aborted: true});
        else resolve(this._setWatcher());
      }, 200)
    })
  }
}


// 测试用例

function delay(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log('delay ' + time);
      resolve();
    }, time);
  });
}

function mockFetch(time) {
  return () => delay(time).then(() => {
    // console.log('complete mock fetch');
    return 'mockFetch - result';
  });
}

const task = new Task(mockFetch());
task.start();

task.result.then((res) => {
  console.log('# task complete', res);
}).catch(err => {
  if (err.aborted) {
    console.log('# task aborted');
  } else {
    console.log('# task error', err);
  }
});


// # task complete mockFetch - result

setTimeout(() => {
  task.cancel();
}, 1000)

// # task aborted