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
  //  arr: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],

  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(value, kod) {
    if (!value || !kod) throw new Error('Incorrect arguments!');
      let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let str = value.toUpperCase()
      let cipher = kod.toUpperCase()
      //===================================
      // мыссив с длиннами слов 
      let splitArr = [];
      let array = [];
      array = str.split(' ');
      for (let i = 0; i < array.length; i++) {
          splitArr.push(array[i].length);
      }
      //============================================
      let start = Array.from(str)
      let arrStr =[];
      let arrSave = [];
      let arrCipher = [];
      let arrSum = [];
      let result =[];
      //создаем массив цифр равный номеру в алфавите
      for (let i = 0; i < str.length; i++) {
          let index = arr.indexOf(str[i]);
          arrStr.push(index);
      }
     //создаем массив cпустыми значениями пример ['','','','!','','1','2']
  for (let i = 0; i < start.length; i++) {
      if (start[i].match(/[A-Z]/)) {
          start[i]='';
      }
  }
      arrStr = arrStr.filter(item => item !== -1);
  
  // создаем массив равный длине массива для слова но с индексами для кода
      for (let i= 0; i< arrStr.length; i++){
  
      if(i >= cipher.length && i <arrStr.length){
          let index = arr.indexOf(cipher[i-(cipher.length*[Math.floor(i/cipher.length)])]);
          arrCipher.push(index);
      } else {
          let index = arr.indexOf(cipher[i]);
          arrCipher.push(index);
      }
      }
  //создаем массив сумм двух массивов
    for(let j =0; j <arrStr.length; j++ ){
      let index = (arrStr[j] + arrCipher[j])%26;
      arrSum.push(index);
  }
  //выводим массив в буквы 
  for (let i = 0; i < arrSum.length; i++) {
      let index = arrSum[i];
      let letter = alphabet.charAt(index);
      result.push(letter);
  
  }
  
  //вставляет в start result
  let g =0

  for(let i=0; i < start.length; i++ ){
      if(start[i]=== ''){
          start[i]=result[g]
          g++
      }
  }


  return this.direct ? start.join('') : start.reverse().join('');
}

  decrypt(value, kod) {
    if (!value || !kod) throw new Error('Incorrect arguments!');
    let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str = value.toUpperCase()
    let cipher = kod.toUpperCase()
    //===================================
    // мыссив с длиннами слов 
    let splitArr = [];
    let array = [];
    array = str.split(' ');
    for (let i = 0; i < array.length; i++) {
        splitArr.push(array[i].length);
    }
    //============================================
    let start = Array.from(str)
    let arrStr =[];
    let arrSave = [];
    let arrCipher = [];
    let arrSum = [];
    let result =[];
    //создаем массив цифр равный номеру в алфавите
    for (let i = 0; i < str.length; i++) {
        let index = arr.indexOf(str[i]);
        arrStr.push(index);
    }
   //создаем массив cпустыми значениями пример ['','','','!','','1','2']
for (let i = 0; i < start.length; i++) {
    if (start[i].match(/[A-Z]/)) {
        start[i]='';
    }
}
    arrStr = arrStr.filter(item => item !== -1);

// создаем массив равный длине массива для слова но с индексами для кода
    for (let i= 0; i< arrStr.length; i++){

    if(i >= cipher.length && i <arrStr.length){
        let index = arr.indexOf(cipher[i-(cipher.length*[Math.floor(i/cipher.length)])]);
        arrCipher.push(index);
    } else {
        let index = arr.indexOf(cipher[i]);
        arrCipher.push(index);
    }
    }
//создаем массив сумм двух массивов
  for(let j =0; j <arrStr.length; j++ ){
    let index = (arrStr[j] - arrCipher[j])
    let index2
    if(index < 0){
    index2 = (index+26)%26
    }else{
      index2 = index%26
    }
  
    arrSum.push(index2);
}
//выводим массив в буквы 
for (let i = 0; i < arrSum.length; i++) {
    let index = arrSum[i];
    let letter = alphabet.charAt(index);
    result.push(letter);

}

//вставляет в start result
let g =0

for(let i=0; i < start.length; i++ ){
    if(start[i]=== ''){
        start[i]=result[g]
        g++
    }
}


return this.direct ? start.join('') : start.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
