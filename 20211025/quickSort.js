/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {

  const sort = (arr, left = 0, right = arr.length - 1) => {
      if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
          return
      }
      let i = left
      let j = right
      const baseVal = arr[j] // 取无序数组最后一个数为基准值
      while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
          while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
              i++
          }
          arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
          while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
              j--
          }
          arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
      }
      arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
      sort(arr, left, j-1) // 将左边的无序数组重复上面的操作
      sort(arr, j+1, right) // 将右边的无序数组重复上面的操作
  }
  const newArr = nums.concat() // 为了保证这个函数是纯函数拷贝一次数组
  sort(newArr)
  return newArr


};

// 不增加额外空间，数组进行交换。
function sort2(nums) {
  const quickSort = (arr, left, right) => {
    if (left >= right) {
      return;
    }
    let i = left;
    let j = right;
    let baseVal = arr[i];
    while (i < j) {
      while (i < j && arr[j] >= baseVal) {
        j--;
      }
      a[i] = a[j];
      while (i < j && arr[i] <= baseVal) {
        i++;
      }
      a[j] = a[i];
    }
    a[i] = baseVal;
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
  let array = nums.concat();
  quickSort(array, 0, array.length - 1)
  return array;
}
// 使用额外空间
var sortArray = function(arr) {

  if (arr.length <= 1) { return arr; }
  
  　　var pivotIndex = Math.floor(arr.length / 2);
  
  　　var pivot = arr.splice(pivotIndex, 1)[0];
  
  　　var left = [];
  
  　　var right = [];
  
  　　for (var i = 0; i < arr.length; i++){
  
  　　　　if (arr[i] < pivot) {
  
  　　　　　　left.push(arr[i]);
  
  　　　　} else {
  
  　　　　　　right.push(arr[i]);
  
  　　　　}
  
  　　}
  
  　　return sortArray(left).concat([pivot], sortArray(right));
  
  };

  // Self version
  function sortArray(arr) {
    let len = arr.length;
    let result = [];
    let left = [];
    let right = [];
    if (len >= 1) {
        let mid = Math.floor(len / 2);
        let index = 0;
        // 1. withdraw the pivot value, in case of endless loop.
        let pivot = arr.splice(mid, 1)[0];
        // 2. arr.length changed after splice
        while(index < arr.length) {
            if (arr[index] < pivot) {
                left.push(arr[index]);
            } else {
                right.push(arr[index]);
            }
            index++;
        }
        result = [...sortArray(left), pivot, ...sortArray(right)]
    }
    return result;

}