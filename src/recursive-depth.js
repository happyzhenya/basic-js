const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
  calculateDepth(arr) {
    let number=1;
    let depth=0;
    for (let  array of arr){
      Array.isArray(array) ? (depth=Math.max(this.calculateDepth(array)), depth): null;}
      return number+depth;

    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


module.exports = {
  DepthCalculator
};
