const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(/* date */) {
   if (typeof date === "undefined") {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }
  try {
    m = date.getMonth();
    if (m === 11 || m === 0 || m === 1) {
      return "winter";
    } else if (m >= 2 && m <= 4) {
      return "spring";
    } else if (m >= 5 && m <= 7) {
      return "summer";
    } else {
      return "autumn";
    }
  } catch (err) {
    console.log(date);
    throw new Error("Invalid date!");
  }

}

module.exports = {
  getSeason
};
