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
function decodeMorseLetter(words) {

  return words === (' ') ? words : MORSE_TABLE[words];
}
function splitStringIntoTenChars (str) {
  const regexp = (/.{1,10}/g);
  return str.match(regexp);
}
function decode(expr) {
  
  const arr = splitStringIntoTenChars(expr);




  let arrWithSpace = arr.map(el => {
    return el === '**********' ? '**' : el;
  });
 
  let letters = arrWithSpace.map(element => {
   let newArr = element.match(/.{2}/g);  
  
    return newArr;
  });
  
 
  let newArr2 = letters.map(elem => {
    
    let inAr = [];
    
    elem.forEach(el => {
    if (el==='10') {
      inAr.push('.');
    }
    else if (el==='11') {
      inAr.push('-');
    }
    else if (el==='**') {
      inAr.push(' ');
    }
      
   
    });
     
     return inAr;
    
  });

 return newArr2.map(el => decodeMorseLetter(el.join(''))).join('');
 
}

module.exports = {
  decode
}
