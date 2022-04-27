const { NotImplementedError } = require('../extensions/index.js');

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
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof s1==="string" && typeof s1==="string" ){

  let s1Array=s1.split('');
  let s2Array=s2.split('') ;
  result=[]
  
  for (let i=0; i<s1Array.length; i++){
    if(s2Array.includes(s1Array[i])){
      result.push(s1Array[i])
      delete s2Array[s2Array.indexOf(s1Array[i])]
    }

  }
  return result.length;
  } else return  false
}

module.exports = {
  getCommonCharacterCount
};
