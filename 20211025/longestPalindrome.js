/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let i, j;
  let max = 0;
  let result;
  if (s.length == 1) {
      result = s;
  }
  // i, j都是小于等于，保证能截取到最后一个子串
  for (i = 0; i <= s.length - 1; i++) {
      for (j = i + 1; j <= s.length; j++) {
          // substring方法的两个参数是起始位置和终止位置，返回起始和终止之间的字符串，不包括终止字符。
          let sub = s.substring(i, j);
          if (isPalindrome(sub) && sub.length > max) {
              max = sub.length;
              result = sub;
          }
      }
  }
  return result;
};
var isPalindrome = function(s) {
  if (s.length <= 0) {
      return false;
  }
  let i = 0, j = s.length - 1;
  while (i < j) {
      if (s[i] !== s[j]) {
          return false;
      }
      i++;
      j--;
  }
  return true;
}