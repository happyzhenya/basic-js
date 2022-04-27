const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

  if (typeof email==="string"){
    return email.slice(email.lastIndexOf("@")+1, email.length )
  } else return false 
  //throw new NotImplementedError('Not implemented');

  // remove line with error and write your code here

}

module.exports = {
  getEmailDomain
};
