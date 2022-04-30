const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res={}
  

  for (let i=0; i<domains.length; i++){
    let domen=""
    let temp=domains[i].split(".").reverse();
       for (let j=0; j<temp.length; j++){
         
        domen =domen +"."+temp[j];
          if(res.hasOwnProperty(domen)){
            res[domen]=res[domen]+1
          } else{
            res[domen]=1
          }
       }
  }
  return res
  

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
