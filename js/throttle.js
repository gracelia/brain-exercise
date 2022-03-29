/**
 * 定义：操作间隔大于某段时间后，执行回调
*/
// 节流--定时器版
function throttle(func,delay){
  let timeout; //定义一个定时器标记
  return function(arguments){
    // 判断是否存在定时器
    if(!timeout){
      // 创建一个定时器
      timeout = setTimeout(()=>{
        // delay时间间隔清空定时器
        clearTimeout(timeout);
        func.call(this,arguments);
      },delay)
    }
  }
}
function throttle2(method, delay) {
  let last = 0;
  return function () {
    // let context = this, args = arguments;
    let curr = +new Date();
    if (curr - last > delay) {
        method.call(context, args);
        last = curr;
    }
    
  }
}
