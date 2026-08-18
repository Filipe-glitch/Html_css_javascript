// 1. Cálculo da área de um círculo
const PI = 3.14;
console.log("----- Cálculo da Área do Círculo -----");

let raioEntrada = prompt("Qual o raio do círculo?");
let raio = parseFloat(raioEntrada);

if (!isNaN(raio)) {
    let area = PI * Math.pow(raio, 2);
    console.log("A área é:", area);
    alert("A área do círculo é: " + area.toFixed(2));
} 
else {
    alert("Valor inválido para o raio.");
}

// 2. Verificação de Gênero
let sexo = prompt("Digite o sexo (M/F):");

if (sexo) {
    sexo = sexo.toUpperCase();
    if (sexo === 'M') {
        console.log('Sexo é masculino');
        alert('Seu sexo é masculino');
    } 
    else if (sexo === 'F') {
        console.log('Sexo é feminino');
        alert('Seu sexo é feminino');
    } 
    else {
        console.log('Opção inválida');
        alert('Opção inválida');
    }
}

// 3. Porcentagem via Prompt
console.log('Uma turma de alunos');
let quantidadeHomens = parseInt(prompt('Digite a quantidade de homens na turma:')) || 0;
let quantidadeMulheres = parseInt(prompt('Digite a quantidade de mulheres na turma:')) || 0;

let total = quantidadeHomens + quantidadeMulheres;

if (total > 0) {
    let pctMulheres = (quantidadeMulheres * 100) / total;
    let pctHomens = (quantidadeHomens * 100) / total;

    alert(`Porcentagem de Homens: ${pctHomens.toFixed(2)}%\nPorcentagem de Mulheres: ${pctMulheres.toFixed(2)}%`);
}