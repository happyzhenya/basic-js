const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 
  let arrayN=n.toString().split('').map(el => parseFloat(el,10));
  let result=arrayN.map(function(elem, index, res){
    res=arrayN.slice(0);
    res.splice(index, 1);
    return Number(res.join(''))
  })
  return Math.max(...result)
 


  

 
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
