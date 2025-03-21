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

function charToAdd(currentChar, shift){
  return String.fromCharCode(currentChar + shift)
} 

function getNewText(text, shift){
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    let newChar = charToAdd(text.charCodeAt(i), shift)
    newText = newText.concat(newChar)
  }
  return newText
}

function cipher(text, shift) {
  return getNewText(text, shift)
}
  
function decipher(text, shift) {
  return getNewText(text, -shift)
}

console.assert(
  cipher('Hello World', 1) === 'Ifmmp!Xpsme',
  `${cipher('Hello World', 1)} === 'Ifmmp!Xpsme'`,
);
console.assert(
  decipher(cipher('Hello World', 3), 3) === 'Hello World',
  `${decipher(cipher('Hello World', 3), 3)} === 'Hello World'`,
);