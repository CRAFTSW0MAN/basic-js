const { NotImplementedError } = require('../lib');

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

function repeater( str, options) {
  let str2 = str;
  let separator = options.separator || '+';
  let repeatTimes = options.repeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let result = ''


  if(repeatTimes <= 1){
    result += str2;
    if (addition !== 0 && additionRepeatTimes <= 1){
      result += addition;
    }else if(addition !== 0 && additionRepeatTimes > 1){
      let g = additionSeparator+addition;
      result = result + addition +  g.repeat(additionRepeatTimes-1)
    }
  }else if(repeatTimes > 1){
    result += str2;
    if (addition !== 0 && additionRepeatTimes <= 1){
      result += addition;
    }else if(addition !== 0 && additionRepeatTimes > 1){
      let p = additionSeparator+addition;
      result = result + addition +  p.repeat(additionRepeatTimes-1)
    }
    let y = separator +result
      result = result + y.repeat(repeatTimes-1)
  }
  return result;
}

module.exports = {
  repeater
};
