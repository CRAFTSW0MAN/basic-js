const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker ={
  arr: [],

  getLength() {
  return this.arr.length;
  },
  addLink(value = ' ') {
    this.arr.push(value);
    return this
  },
  removeLink(position) {
    if (!!(position % 1) || (position < 1) || (position > this.arr.length) ||isNaN(position)) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!")
    }
    if(position){
      this.arr.splice(position - 1, 1);
      return this
    }else{
      this.arr.pop();
      return this
    }

  },
  reverseChain() {
    this.arr.reverse();
    return this

  },
  finishChain() {
    for(let i=0; i<this.arr.length; i++){
      this.arr[i] = `( ${this.arr[i]} )`;
    }
    let str =this.arr.join('~~');
    this.arr = [];
    return str
  }
};
module.exports = {
  chainMaker,
};
