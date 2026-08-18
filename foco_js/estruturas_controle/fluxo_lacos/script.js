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