const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res=[];
  let addRes=[];
  let separator=(options && options.separator) ? options.separator: "+";
  let additionSeparator=(options && options.additionSeparator) ? options.additionSeparator: "|";
  let repeatTimes=(options && options.repeatTimes) ? options.repeatTimes: 1;
  let additionRepeatTimes=(options && options.additionRepeatTimes) ? options.additionRepeatTimes: 1;
  let addition=(options && options.addition!==undefined) ? options.addition+"": "";
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

for (let i=0; i<additionRepeatTimes; i++){
  addRes.push(addition)
}

addRes=addRes.join(additionSeparator)

for (let i=0; i<repeatTimes; i++){

  res.push(str+addRes)
}
return res.join(separator)

}
module.exports = {
  repeater
};
