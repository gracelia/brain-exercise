(function main() {
  /**
      给定无序数组，找到数组中重复的元素
      关键：找到重复元素，而不是去重。
   */
  function findRepeatNumber(arr) {
      const s = new Set();
      const res = [];
      for(let i = 0; i < arr.length; i++) {
          let prevSize = s.size;
          s.add(arr[i]);
          if (s.size === prevSize) {
              res.push(arr[i])
          }
      }
      return res
  }
  let a = [3,1,4,5,6,6,2,1,2,0]
  const result = findRepeatNumber(a)
  console.log(result)

  /**
      给定有序数组，找到数组中重复的元素
   */
  function findRepeatNumber2(arr) {
      // const res = new Set()
      const res = [];
      for (let i = -1, j = 0; j < arr.length; j++) {
          if (arr[i] === arr[j] && res.indexOf(arr[j]) < 0) {
              res.push(arr[j])
              // res.add(arr[j])
          } else {
              i = j;
          }
      }
      //return [...res];
      return res;
  }
  let b = [0,1,1,2,2,2,3,4,4,5,5,5,5,6,7,7]
  const result2 = findRepeatNumber2(b)
  console.log(result2)


  function removeDuplicate(arr) {
    
  }
}());