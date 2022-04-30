const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

let arr=[]
const chainMaker = {
  arr: [],

  getLength() {
    
    return this.arr.length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value===undefined){
      this.arr.push("( )");
    } else{
    this.arr.push(`( ${value} )`);
    }
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (!this.arr[position] || typeof position !=='number' || position<=0  || position<arr.length){
      this.arr = [];
      throw new Error ("You can't remove incorrect link!");
    } 
     
      this.arr.splice(position-1, 1)
      return this;
     
  },

  reverseChain() {
   this.arr.reverse();
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
  
    let res=this.arr.join("~~");
    this.arr=[];
    return res;

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
