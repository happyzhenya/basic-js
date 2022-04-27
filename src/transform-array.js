const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw  Error ("'arr' parameter must be an instance of the Array!")
  let newArray=[]
  for (let i=0; i<arr.length; i++){
    switch(arr[i]){

    case ("--discard-next"):
      i+=2;
      break;

    case ("--discard-prev" ):
        newArray.pop();
        break;

    case ("--double-next"):
      if (arr.length>i+1){
        newArray.push(arr[i+1])
      } 
      break;
    case ("--double-prev"):   
    if (newArray.length>0){
      newArray.push(arr[i-1])
    } 
    break;
    case undefined:
      i++;
      break;
    default:
      newArray.push(arr[i])  
    }
  }
    return newArray;

  }
  
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  transform
};
