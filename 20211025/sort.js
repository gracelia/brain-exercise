function bubbleSort(nums) {
    for(let i = nums.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if (nums[j] > nums[j+1]) {
                swap(nums, j, j+1)
            }
        }
    }
    return nums
}
function bubbleSort2(nums) {
  for(let i = 0; i < nums.length - 1; i--) {
      for(let j = i; j < nums.length; j++) {
          if (nums[i] > nums[j]) {
              swap(nums, i, j)
          }
      }
  }
  return nums
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}