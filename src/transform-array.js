const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let arr2 = [...arr];
  console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "--discard-next") {
      if (arr[i + 2] === "--discard-prev" || arr[i + 2] === "--double-prev") {
        arr2.splice(i, 3);
      } else {
        arr2.splice(i, 2);
        i--;
      }
    } else if (arr2[i] === "--double-prev") {
      if (i === 0) {
        arr2.splice(i, 1);
      } else {
        arr2[i] = arr2[i - 1];
      }
    } else if (arr2[i] === "--discard-prev") {
      if (i === 0) {
        arr2.splice(i, 1);
      } else {
        arr2.splice(i - 1, 2);
      }
    } else if (arr2[i] === "--double-next") {
      if (i >= arr2.length - 1) {
        arr2.splice(i, 1);
      } else {
        arr2[i] = arr2[i + 1];
      }
    }
  }
  console.log(arr2);
  return arr2;
}
module.exports = {
  transform
};
