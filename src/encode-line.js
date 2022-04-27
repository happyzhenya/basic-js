const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let result=[]
  let repeat=1;
  let strArray=str.split('');

  for (let i=0; i<strArray.length; i++){
    let temp;
    if (strArray[i]===strArray[i+1]){
      repeat++;
    } else{
     repeat===1 ? temp= `${strArray[i]}` : temp = `${repeat}${strArray[i]}`;
     result.push(temp)
     repeat=1
    }
  }
  return result.join('')



//throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
