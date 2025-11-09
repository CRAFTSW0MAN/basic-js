const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const arr = str.split("");
  count = 1;
  let str2 = "";

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      if (i < arr.length - 1) {
        count++;
      } else {
        str2 = str2 + `${count + 1}${arr[i - 1]}`;
      }
    } else {
      if (count === 1) {
        if (i < arr.length - 1) {
          str2 += arr[i - 1];
        } else {
          str2 += arr[i - 1] + arr[i];
        }
      } else {
        if (i < arr.length - 1) {
          str2 = str2 + `${count}${arr[i - 1]}`;
          count = 1;
        } else {
          str2 = str2 + `${count}${arr[i - 1]}${arr[i]}`;
        }
      }
    }
  }
  return str2;
}


module.exports = {
  encodeLine
};
