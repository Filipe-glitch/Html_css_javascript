// Valores booleanos
let isSunny = true;
let isWeekend = false;
console.log("Está ensolarado?", isSunny);   // true
console.log("É fim de semana?", isWeekend); // false
if (isSunny && !isWeekend) {
  console.log("Dia de trabalhar no sol!");
}

// Operadores lógicos (&& e ||)
if (isWeekend && isSunny) {
  console.log("Picnic day");
}

let isRaining = false;
if (isRaining || isSunny) {
  console.log("Lets go out");
}

// TRUTHY E FALSY
if (42) {
  console.log("This is truthy!"); // Executa
}
if (0) {
  console.log("This is not going to work"); // Não executa pois 0 avalia como False
}

// Operador ternário(condicao ? verdadeiro : falso)
let age = 15;
let isAdult = age >= 12 ? true : false;
console.log("isAdult:", isAdult); // true

// Caixa de diálogo e entrada do usuário
let nomeUsuario = window.prompt("Qual seu nome?");
if (nomeUsuario) {
    alert(`Olá, ${nomeUsuario}`);
}

// Estruturas condicionais (if/else)
let idade = 3;
if (idade <= 11) {
    alert("Você ainda é uma criança");
} 
else if (idade >= 63) {
    alert("Você é idoso");
} 
else {
    alert("Você é jovem");
}

// Estruturas condicionais(If/else)
let temp = 28;
if (temp > 30) {
  console.log("Its very hot");
} 
else {
  console.log("Temperatura amena");
}


// Estrutura de escolha (switch)
let estado = "SC";
switch (estado) {
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

// Laço for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Laço while
let num = 0;
while (num < 90) {
    console.log(num);
    num += 10;
}

// Loop com confirmação interativa
let continua = false;
let contador = 1;
while (!continua) {
    continua = !confirm(`[${contador++}] Mais um loop?`);
}

// Laço do...while
let num2 = 0;
do {
    console.log(num2);
    num2 += 10;
} 
while (num2 < 90);