const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let n = 0
  let arr  = matrix.flat();
  for (let i=0; i < arr.length; i++){

    if(arr[i] === '^^'){
      n++;
    }
  }
  // for (let i=0; i < matrix.length; i++){
  //   if (matrix[i] === null || matrix[i] === undefined || typeof matrix[i] === "boolean" || typeof matrix[i] === "number" || matrix[i].length === 0){
  //     n;
  //   }else if(matrix[i].includes('^^')){
  //     for (let j=0; j < matrix[i].length; j++){
  //       if (matrix[i][j] === null || matrix[i][j] === undefined || matrix[i][j].length === 0 || typeof matrix[i][j] === "boolean" || typeof matrix[i][j] === "number"){
  //         n;

  //       }else if(isNaN(matrix[i][j])){
  //         if(matrix[i][j].includes('^^')){
  //           n++;
  //         }

  //       }
  //     }
  //   }

  // }
  console.log(n)
  return n
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
