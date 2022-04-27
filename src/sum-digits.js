const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arrayN=n.toString().split('').map(el=>parseFloat(el, 10))
  let sum=0;
   
  if (n<=9 && n>=0){
    return n
    
  } else
    return n.toString().split('').map(el=>parseFloat(el, 10)).reduce(function(summa, el) {
     s=summa+el
      if (s>9){
       return getSumOfDigits(s)
      } else
      return s
    })
  
 
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
