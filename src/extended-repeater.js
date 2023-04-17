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
 * => 'STRING PLUS 00PLUS00PLUS ** STRING PLUS 00PLUS00PLUS ** STRING PLUS 00PLUS00PLUS'
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
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
// function repeater(str, options) {
//   let str2 = str;
//   let separator = options.separator || '+';
//   let repeatTimes = options.repeatTimes || 1;
//   let additionSeparator = options.additionSeparator || '|';
//   let additionRepeatTimes = options.additionRepeatTimes || 1;
//   let addition = options.addition !== undefined ? String(options.addition) : '';
//   let result = ''

//   if(repeatTimes <= 1){
//     result += str2;
//     if (addition !== 0 && additionRepeatTimes <= 1){
//       result += addition;
//     }else if(addition !== 0 && additionRepeatTimes > 1){
//       let g = addition+additionSeparator;
//       for (let i=0; i <= additionRepeatTimes; i++){
//         result += g
//       }
//     }
//   }else if(repeatTimes > 1){
//     result += str2;
//     if (addition !== 0 && additionRepeatTimes <= 1){
//       result += addition;
//     }else if(addition !== 0 && additionRepeatTimes > 1){
//       //! этот for для формирования addition+addition_selector-последнее повторение
//       for (let i =1; i <= additionRepeatTimes; i++){
//         if (i === additionRepeatTimes) {
//           result += addition;
//         }else {
//           result += addition+additionSeparator;
//         }
//       }
//     }
//     let y = separator +result
//     for (let i=2; i <= repeatTimes; i++){
//       result += y
//     }
//   }
//   return result;
// }

module.exports = {
  repeater
};
