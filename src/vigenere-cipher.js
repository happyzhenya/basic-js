const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 
class VigenereCipheringMachine {

  constructor(typeMachine=true){
     this.typeMachine=typeMachine;
     this.alfabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
  }
  encrypt(message, key) {
    if(!message || !key || typeof message!="string" || typeof key!="string") throw  Error ('Incorrect arguments!')
    message=message.toUpperCase();
    key=key.toUpperCase();
    let maxLenght=Math.max(message.length, key.length);
    let r='';
    for (let i=0; i<maxLenght; i++){
      let mi =this.alfabet.indexOf( message[ ( (i>=message.length) ?i%message.length :i ) ] );
		  let ki_s = key[ ( (i>=key.length) ?i%key.length :i ) ];
     let  ki=this.alfabet.indexOf(ki_s);
      let c = this.alfabet[ ( ( ( this.alfabet.length + ( mi + ki ) ) % this.alfabet.length ) ) ];
      r+=c	
    }
    console.log(r)
    return r;
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key || typeof encryptedMessage!="string" || typeof key!="string") throw  Error ('Incorrect arguments!')
    encryptedMessage=encryptedMessage.toUpperCase();
    key=key.toUpperCase();
    let maxLenght=Math.max(encryptedMessage.length, key.length);
    let r='';
    for (let i=0; i<maxLenght; i++){
      let mi =this.alfabet.indexOf( encryptedMessage[ ( (i>=encryptedMessage.length) ?i%encryptedMessage.length :i ) ] );
		  let ki_s = key[ ( (i>=key.length) ?i%key.length :i ) ];
     let  ki=-ki;
      let c = this.alfabet[ ( ( ( this.alfabet.length + ( mi + ki ) ) % this.alfabet.length ) ) ];
      r+=c	
    }
    console.log(r)
    return r;
  }

  
}

module.exports = {
  VigenereCipheringMachine
};
