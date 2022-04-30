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
    
    let depth=1;
    let newDepth=0;
    for (let  array of arr){
      if (Array.isArray(array)){
        let current=this.calculateDepth(array);
        newDepth=Math.max(current, newDepth)? current: newDepth;
      }
    }
      return depth+newDepth;

    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


module.exports = {
  DepthCalculator
};
