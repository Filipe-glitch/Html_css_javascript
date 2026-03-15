
document.body.innerHTML =  'Bem vindo ao curso de JS';
Math.abs(-655); // transforma números negativos em inteiros
Math.floor(89.4); //arredonda pra baixo, 89
Math.ceil(89.4); //arredonda pra cima
Math.round(89.4); //arredondamento normal, para cima ou para baixo
Math.trunc(89.4); //
Math.min(4, 7, 9, 78); // ele irá me devolver o menor valor
Math.max(7, 9, 787, 655); // ele irá me devolver o maior valor
Math.pow(6, 2); // pow(base = 6, expoente = 2) ou 6 ** 2
Math.sqrt(40); //square root = raiz quadrada
Math.cbrt(27); //cube root = raiz cubica
Math.random(); //GERA um número aleatório entre 0 e 1
Math.random() * 10// se quiser um número entre 0 e 10
Math.floor(Math.random() * 10) // 0 até 9 , e será um número inteiro 
Math.sign(45); // Retorna o 1 se for positivo, 0 se for zero e -1 se for negativo
Math.sin(Math.PI / 2) //Math.PI/2 é 90 graus em radianos. sin=seno. 
// javascript usa radianos e não graus
Math.cos(45) //cosseno
Math.tan(12) //tangente
Math.log(Math.E) //Math.E é a constante de Euler, Math.log(x) é o logaritmo natural(base e)
Math.log10(99) // logaritmo na base 10
Math.exp(1) // calcula e elevado à potência 1. e é a contante de euler
Math.hypot(4, 6) //Calcula a hipotenusa de um triângulo retângulo com catetos 4 e 6.
Math.fround(6, 6) //arredonda o número para precisão de 32 bits (float). Aceita um argumento. O , 6 depois é ignorado.
Math.clz32(2) //conta os zeros à esquerda no número binário.
Math.imul(6, 3)//multiplicação de inteiros de 32 bits.útil em gráficos e performance
Math.atan2(2, 2)//Retorna o ângulo em radianos entre o ponto (2, 2) e a origem (0, 0).
3 << 2 //deslocamento de bits para a esquerda.
16 >>> 2 //deslocamento lógico à direita.
//porcentagem que ser na mão : 10/100 = 10%

let nome = "margatete";
console.log(nome);
nome = "erica";
console.log(nome);//sairá erica 
let altura;
altura = 2.4;
console.log(altura)
"use strict";

let altura2= 180;
{
 let peso= 70;
 console.log(altura2); // -> 180
 console.log(peso); // -> 70 
}
console.log(altura2); // -> 180
// console.log(peso); // não tem, pois peso foi definido no bloco

let a = 5;
let b = 10;
console.log(`resultado da operação é ${a + b}`);

let str = "elephant is a big animal";
let word = "hello";
let greeting = "world";

// métodos com strings
console.log("charAt:", greeting.charAt(1)); 
console.log("slice:", str.slice(0, 9)); 
console.log("split:", str.split(" ")); 
console.log("concatenação:", 'eleph' + 'ant1' + 15);
console.log("typeof:", typeof 'fjdj');
console.log("valor:", 'R$' + 39);
console.log("charCodeAt:", greeting.charCodeAt(1)); // código ASCII
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

// operadores 
let x = 5;
x += 2;
console.log(x)
let all = true && true;
console.log(all)

// alertas
let nome2 = window.prompt("Qual seu nome?");
alert(`olá, ${nome2}`);
// window.alert('hi');

// controle de fluxo
let idade=3;
if(idade<=11){
   alert("Você ainda é uma criança");
}
else if(idade => 63){
    alert("você é idoso")
}
else{
    alert("você é jovem")
}

let estado = "SC";
switch(estado){
 case "RS":
 alert("Rio Grande do Sul");
 break;
 case "SC":
 alert("Santa Catarina");
 break;
 case "PR":
 alert("Paraná");
 break;
 default:
 alert("Não é um estado do sul");
}

// laços de repetição
for (let i = 0; i < 10; i++) {
 console.log(i);
}

let num = 0;
while(num < 90) {
 console.log(num);
 num += 10;
}

let continua = false;
let contador = 1;
while (!continua) {continua = !confirm(`[${contador++}] Mais um loop?`);
} // gera loops que só param se vc clicar na opção cancelar 
let num2 = 0;

do
 {
 console.log(num2);
 num2 += 10;
 }
 while(num2<90)
