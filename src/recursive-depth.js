const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, dive = 1) {
    let maxDive = dive;
    for (let el of arr) {
      if (Array.isArray(el)) {
        const newDive = this.calculateDepth(el, dive + 1);
        maxDive = Math.max(maxDive, newDive);
      }
    }

    return maxDive;
  }
}


module.exports = {
  depthCalculator: new DepthCalculator(),
};
