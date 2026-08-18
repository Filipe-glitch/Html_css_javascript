"use strict";

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

let a = 5;
let b = 10;
console.log(`Resultado da operação é ${a + b}`);

let str = "elephant is a big animal";
let word = "hello";
let greeting = "world";

// Métodos de String
console.log("charAt:", greeting.charAt(1));
console.log("slice:", str.slice(0, 9));
console.log("split:", str.split(" "));
console.log("concatenação:", 'eleph' + 'ant1' + 15);
console.log("typeof:", typeof 'fjdj');
console.log("valor:", 'R$' + 39);
console.log("charCodeAt:", greeting.charCodeAt(1));
console.log("concat:", 'HI'.concat(' ', 'there'));
console.log("endsWith:", 'HELLO'.endsWith('O'));
console.log("includes:", 'hello'.includes('ell'));
console.log("indexOf:", 'hello'.indexOf('e'));
console.log("lastIndexOf:", 'hii'.lastIndexOf('i'));
console.log("match:", 'hello'.match(/l/));
console.log("match global:", 'hello'.match(/l/g));
console.log("repeat:", 'low'.repeat(5));
console.log("replace:", 'bpple'.replace('b', 'a'));
console.log("replaceAll:", 'hello'.replaceAll('l', 'y'));
console.log("search:", 'heppppo'.search(/p/));

// Operadores
let x = 5;
x += 2;
console.log(x);
let all = true && true;
console.log(all);