"use strict";

// Funções declaradas
function greet(name) {
  return "You are Welcome, " + name; // com retorno
}
console.log(greet("Jim"));

function olaMundo() {
  console.log("Olá, Mundo"); // sem retorno
}
olaMundo();

// Controle de fluxo com Return
function mostrarMsg() {
    console.log("Mensagem A");
    return; // Encerra a execução da função
    console.log("Mensagem B"); // Não será executado
}
mostrarMsg();

// Expressões de Função
const sum = function (a, b) {
    return a + b;
};
console.log("Soma Expression:", sum(5, 5));

// Arrow Function (Sintaxe Enxuta)
const add = (a, b) => a + b;
console.log("Soma Arrow:", add(3, 6));
const somaArrow = (n3, n4) => n3 + n4;
console.log("Soma Arrow Function (7 + 8):", somaArrow(7, 8));

// IIFE (Immediately Invoked Function Expression) - Executa imediatamente
(function () {
    console.log("This is working (IIFE)");
})();

// Função Anônima usada como Callback em temporizador
setTimeout(function () {
    console.log("This anonymous function is working");
}, 500);

// Fatorial Iterativo (com while)
function fatorialIterativo(n) {
    let resultado = 1;
    while (n > 1) {
       resultado *= n;
    n--;
    }
    return resultado;
}
console.log("Fatorial Iterativo (6):", fatorialIterativo(6));

// Fatorial Recursivo (a função chama a si mesma)
function fatorialRecursivo(n) {
    return n > 1 ? n * fatorialRecursivo(n - 1) : 1;
}
console.log("Fatorial Recursivo (6):", fatorialRecursivo(6));

// Funções geradoras
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generateNumbers();
console.log("Gerador (1º valor):", gen.next().value); // 1
console.log("Gerador (2º valor):", gen.next().value); // 2

// Funções construtoras
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person("Jerry", 22);
console.log("Pessoa:", person.name, person.age);

// Funções nativas e métodos arrays
let num = parseInt("134"); // Converte String para Int
let randomNumber = Math.random(); // Gera número aleatório
let numbers = [2, 3, 4];
let squared = numbers.map((num) => num * num);
console.log("Quadrados (map):", squared); // [4, 9, 16]