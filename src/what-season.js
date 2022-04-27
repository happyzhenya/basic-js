const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  try {
    if (!date) { return 'Unable to determine the time of year!';}
    
    if (!isNaN(date) || date) {
  const month=date.getMonth();
  
  switch(month){
   case 0: return "winter" || true; break;
   case 1: return "winter" || true; break;
   case 2: return "spring" || true; break;
   case 3: return "spring" || true; break;
   case 4: return "spring" || true; break;
   case 5: return "summer" || true; break;
   case 6: return "summer" || true; break;
   case 7: return "summer" || true; break;
   case 8: return "autumn" || true; break;
   case 9: return "autumn" || true; break;
   case 10: return "autumn" || true; break;
   case 11: return "winter" || true; break;
   case undefined: return "Invalid date!" ; break;
   
 }}

else return 'Unable to determine the time of year!';

}
catch {
  throw new Error ("Invalid date!");
}
}

//throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  getSeason
};
