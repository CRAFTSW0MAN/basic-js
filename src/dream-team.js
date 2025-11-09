const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  let str;
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let g = members[i].split(" ").join("");
      arr.push(g[0].toUpperCase());
      str = arr.sort().join("");
    }
  }
  console.log(str);
  return str;
}

module.exports = {
  createDreamTeam
};
