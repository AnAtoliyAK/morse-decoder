const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};


function splitStringIntoTenChars(str) {
  const regexp = (/.{1,10}/g);
  return str.match(regexp);
}

function cutSpaceStringInArray(arr) {
  return arr.map(el => {
    return el === '**********' ? '**' : el;
  });
}

function splitStringIntoTwoChars(array) {
  return array.map(element => {
    return element.match(/.{2}/g);
  })
};

function changeNumbersOnChars(letters) {
  return letters.map(elem => {
    let newArray = [];
    elem.forEach(el => {
      if (el === '10') {
        newArray.push('.');
      }
      else if (el === '11') {
        newArray.push('-');
      }
      else if (el === '**') {
        newArray.push(' ');
      }
    });
    return newArray;
  });
};

function decodeMorseLetter(letter) {
  return letter === (' ') ? letter : MORSE_TABLE[letter];
};

function decodeMorseWord (array) {
 return array.map(el => decodeMorseLetter(el.join(''))).join('');
};


function decode(expr) {

  const arr = splitStringIntoTenChars(expr);

  const arrWithSpace = cutSpaceStringInArray(arr);

  const letters = splitStringIntoTwoChars(arrWithSpace);

  const letterArray = changeNumbersOnChars(letters);

  return decodeMorseWord (letterArray);
}

module.exports = {
  decode
}
