/**
 * 定义：连续操作停止后，某段时间，执行回调函数
*/
function debounce(func,delay){
  let timeout; //定时器
  return function(arguments){
    // 判断定时器是否存在，存在的话进行清除，重新进行定时器计数
    if(timeout) clearTimeout(timeout);//清除之前的事件
    timeout = setTimeout(()=>{
      func.call(this,arguments);//执行事件
    },delay);
  }
}
function debounce(method, delay) {
  let timer;
  return function () {
    let context = this, args = arguments;
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      method.call(context, args)
    }, 100);
  }
}