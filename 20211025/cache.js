(function main() {
  function add(a, b) {
      console.log(`call add func with ${a} and ${b}`);
      return a + b;
  }

  // const cachedAdd = cacheWrapper(add);
  // cachedAdd(1, 2) // call add func with 1 and 2 -> 3
  // cachedAdd(1, 2) //  -> 3
  // cachedAdd(2, 1) //  call add func with 2 and 1 -> 3

  // 题解：
  class Wrapper {

      constructor() {
          this.resMap = new Map();
          this.cacheWrapper = this.cacheWrapper.bind(this);
      }

      cacheWrapper(fn) {

          const wrapperFn = (...args) => {
              const key = args.join(',');
              if (this.resMap.has(key)) return this.resMap.get(key);

              const res = fn.apply(null, args);
              this.resMap.set(key, res);
              return res;
          }

          return wrapperFn;
      }
  }

  const cacheWrapper = new Wrapper().cacheWrapper;

  const cachedAdd = cacheWrapper(add);

  console.log(cachedAdd(1, 2))
  console.log(cachedAdd(1, 2))
  console.log(cachedAdd(1, 2))
  console.log(cachedAdd(2, 1))
  console.log(cachedAdd(2, 1))
  console.log(cachedAdd(2, 1))
}());