"use strict";

// Variaveis e escopos

let nome = "margarete";
console.log(nome);
nome = "erica";
console.log(nome);

let altura = 2.4;
console.log(altura);

let altura2 = 180;
{
    let peso = 70;
    console.log(altura2); // 180
    console.log(peso);    // 70
}
console.log(altura2); // 180


// Templates strings e operações matemáticas

let a = 5;
let b = 10;
console.log(`Resultado da operação é ${a + b}`); // 15
console.log((20 + 30) * 4);                      // 200

// Coerção e verificação de tipos de valores

console.log(typeof 'fjdj');         // 'string'
console.log(typeof 78);             // 'number'
console.log('tail' + 4);            // 'tail4'
console.log(39 + '5');              // '395'
console.log('$' + (20 + 10) * 2);   // '$60'

// Métodos de string

let str = "elephant is a big animal";
let word = "hello";
let greeting = "world";

// Tamanho da String
console.log("length:", "Elephant".length); // 8

// Acesso a caracteres
console.log("charAt:", greeting.charAt(1));      // 'o'
console.log("charCodeAt:", greeting.charCodeAt(1)); // 111 (código UTF-16)

// Busca e verificação
console.log("indexOf:", 'hello'.indexOf('e'));         // 1
console.log("lastIndexOf:", 'hii'.lastIndexOf('i'));   // 2
console.log("includes:", 'hello'.includes('ell'));     // true
console.log("startsWith:", 'Hello'.startsWith('He'));   // true
console.log("endsWith:", 'HELLO'.endsWith('O'));       // true
console.log("search:", 'heppppo'.search(/p/));         // 2 (posição da 1ª ocorrência do regex)
console.log("match:", 'hello'.match(/l/g));            // ['l', 'l']

// Concatenação e Repetição
console.log("concat:", 'HI'.concat(' ', 'there')); // 'HI there'
console.log("repeat:", 'low'.repeat(5));           // 'lowlowlowlowlow'

// Extração e Divisão
console.log("slice:", str.slice(0, 9));          // 'elephant '
console.log("substring:", "Hello".substring(0, 5)); // 'Hello'
console.log("split:", str.split(" "));           // ['elephant', 'is', 'a', 'big', 'animal']

// Substituição
console.log("replace:", 'bpple'.replace('b', 'a'));       // 'apple'
console.log("replaceAll:", 'hello'.replaceAll('l', 'y')); // 'heyyo'

// Maiúsculas / Minúsculas
console.log("toUpperCase:", "right".toUpperCase());          // 'RIGHT'
console.log("toLocaleLowerCase:", "RIGHT".toLocaleLowerCase()); // 'right'

// Remoção de Espaços (Trim)
console.log("trim:", "   daga".trim());              // 'daga'
console.log("trimStart:", "   asgasd".trimStart());  // 'asgasd'
console.log("trimEnd:", "gaghadhh   ".trimEnd());    // 'gaghadhh'

// Preenchimento (Padding)
console.log("padStart:", "9".padStart(4, "0")); // '0009'
console.log("padEnd:", "9".padEnd(4, "0"));     // '9000'

// Outros métodos
console.log("localeCompare:", "x".localeCompare("z"));   // -1 (indica a ordem alfabética)
console.log("valueOf:", new String("Word").valueOf());    // 'Word'
console.log("e\u0301".normalize("NFC")) // 'é'
console.log(String.fromCharCode(72, 101, 108, 108, 111))

// Operadores

let x = 5;
x += 2;
console.log("Atribuição aditiva (+=):", x); // 7

let all = true && true;
console.log("Operador Lógico AND (&&):", all); // true