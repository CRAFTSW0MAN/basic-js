const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str1 = "";
  let str2 = "";
  if (s1.length > s2.length) {
    str1 = s1;
    str2 = s2;
  } else {
    str2 = s1;
    str1 = s2;
  }
  let count = 0;
  const arrStr = str2.split("");
  for (let i = 0; i <= str1.length; i++) {
    if (arrStr.includes(str1[i])) {
      count++;
      arrStr.splice(arrStr.indexOf(str1[i]), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
