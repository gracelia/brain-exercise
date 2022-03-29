/**
 * transfer function to promise
 * @param {function} fn
 * @return {promise}
 */
 export const promisify = fn => (args, data, callback) => new Promise((resolve) => {
  if (typeof callback === 'function') {
    fn(args, () => {
      resolve(callback(data));
    });
  } else {
    fn(args, () => {
      resolve(data);
    });
  }
});