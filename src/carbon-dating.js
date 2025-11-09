const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
  const k = 0.693 / HALF_LIFE_PERIOD;

  if (
    typeof sampleActivity === "string" &&
    +sampleActivity > 0 &&
    +sampleActivity <= 15
  ) {
    let x = Number(sampleActivity);
    console.log(sampleActivity, x);

    let n = Math.log(MODERN_ACTIVITY / x) / k;
    console.log(sampleActivity, x, n);
    return Math.ceil(n);
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
