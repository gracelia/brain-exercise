/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length % 2 !== 0) {
      return false;
  }
  let pairs = new Map([
      [')', '('],
      [']', '['],
      ['}', '{']
  ]);
  let stack = [];
  for (let ch of s) {
      if (pairs.has(ch)) {
          if (pairs.get(ch) !== stack.pop()) {
              return false;
          }
      } else {
          stack.push(ch);
      }
  }
  return stack.length <= 0;

};