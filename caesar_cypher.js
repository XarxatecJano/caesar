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

function upperCaseToLowerCase(char) {
  return char + LETTERS.a - LETTERS.A;
}

function isOutOfAlphabet(char, shift) {
  let charCode = char;
  if (charCode >= LETTERS.A && charCode <= LETTERS.Z) {
    charCode = upperCaseToLowerCase(charCode);
  }
  return charCode >= LETTERS.A && charCode <= LETTERS.Z && (charCode + shift > LETTERS.Z||charCode -shift < LETTERS.A);
}

function shiftAmount(char, shift) {
  return isOutOfAlphabet(char, shift)?shift - ALPHABET_LENGTH:shift;
}

function cipher(text, shift) {
    let cipher = '';
    const adjustedShift = shift % ALPHABET_LENGTH;
    for (let i = 0; i < text.length; i++) {
      const currentChar = text.charCodeAt(i);
      const shiftToApply = shiftAmount(currentChar, adjustedShift);
      const newCharToAddToCipher = String.fromCharCode(currentChar + shiftToApply);
      cipher = cipher.concat(newCharToAddToCipher);
    }
    return cipher;
}
  
  function decipher(text, shift) {
    return cipher(text,-shift);
  }
  
  console.assert(
    cipher('Hello World', 1) === 'Ifmmp!Xpsme',
    `${cipher('Hello World', 1)} === 'Ifmmp!Xpsme'`,
  );
  console.assert(
    decipher(cipher('Hello World', 3), 3) === 'Hello World',
    `${decipher(cipher('Hello World', 3), 3)} === 'Hello World'`,
  );