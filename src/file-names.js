const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arrResult = [];
  const resultCounts = {};
  for (let i=0; i<names.length; i++){
    if(!arrResult.includes(names[i]) && !resultCounts[names[i]]){
      arrResult.push(names[i]);
      resultCounts[names[i]] = 1;
    }else{
      if(!arrResult.includes(`${names[i]}(1)`) && !resultCounts[`${names[i]}(1)`]){
        arrResult.push(`${names[i]}(1)`);
      }else{
        resultCounts[names[i]] += 1;
        arrResult.push(`${names[i]}(${resultCounts[names[i]]})`)
      }
    }
  }
  return arrResult;
}


module.exports = {
  renameFiles
};
