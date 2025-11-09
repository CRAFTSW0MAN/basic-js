const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr= String(n).split("");
  const arr2 = [];
  arr.forEach((number,index)=>{
    const arr3= Array.from(arr);
    arr3.splice(index,1);
    arr2.push(arr3);
  })
  const arrSort= arr2.map(item=>Number(item.join('')));
  return Math.max(...arrSort);
}
module.exports = {
  deleteDigit
};
