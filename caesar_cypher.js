/*
El Cifrado César es una de las técnicas de cifrado más simples y conocidas. 
Se trata de un tipo de cifrado de sustitución en el que cada letra del texto sin cifrar es reemplazada por otra letra 
que se encuentra un número fijo de posiciones hacia abajo en el alfabeto. 
Por ejemplo, con un desplazamiento hacia la derecha de 3, la letra E sería reemplazada por H, 
la F se convertiría en I, y así sucesivamente.
Esta transformación se puede representar alineando dos alfabetos: el alfabeto cifrado es el alfabeto normal 
rotado hacia la derecha un cierto número de posiciones.

A continuación tienes dos funciones que codifican y decodifican usando el cifrado César.
Tu tarea consiste en entender el código y refactorizarlo para que sea lo más limpio posible, 
según lo visto en la sesión de Clean Code
*/

const ALPHABET_LENGTH = 26;
const LETTERS = {A: 65, Z: 90, a:97 ,z:122}

function isUpperCase(char) {
  return char >= LETTERS.A && char <= LETTERS.Z
}

function isLowerCase(char) {
  return char >= LETTERS.a && char <= LETTERS.z;
}


function isOutOfAlphabet(char, shift) {
  return isUpperCase(char) && !isUpperCase(char + shift) ||
         isLowerCase(char) && !isLowerCase(char + shift)
}

function transformText(text, shift) {
  textTransformed = '';
  let CharToAdd, shiftToApply, currentChar;
  shift = shift % ALPHABET_LENGTH;
  for (let i = 0; i < text.length; i++) {
    currentChar = text.charCodeAt(i);
    shiftToApply = isOutOfAlphabet(currentChar, shift)?shift - ALPHABET_LENGTH:shift;
    CharToAdd = String.fromCharCode(currentChar + shiftToApply);
    textTransformed = textTransformed.concat(CharToAdd);
  }
  return textTransformed;
}

function cipher(text, shift) {
    return transformText(text, shift);
}
  
  function decipher(text, shift) {
    return transformText(text, -shift)
  }
  
  console.log('!'.toLowerCase())

  console.assert(
    cipher('Hello World', 1) === 'Ifmmp!Xpsme',
    `${cipher('Hello World', 1)} === 'Ifmmp!Xpsme'`,
  );
  console.assert(
    decipher(cipher('Hello World', 3), 3) === 'Hello World',
    `${decipher(cipher('Hello World', 3), 3)} === 'Hello World'`,
  );
