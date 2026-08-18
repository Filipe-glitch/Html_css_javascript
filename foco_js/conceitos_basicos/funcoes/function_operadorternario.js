// 1. Função Simples sem Retorno
function olaMundo() {
    console.log('Olá');
    console.log('Mundo');
}
olaMundo();

// 2. Fluxo de Execução com Return
function mostrarMsg() {
    console.log("Mensagem A");
    return; // Encerra a execução da função
    console.log("Mensagem B"); // Não será executado
}
mostrarMsg();

// 3. Função com Parâmetros e Retorno
function somar(num1, num2) {
    return num1 + num2;
}
console.log("Soma:", somar(35, 2));

// 4. Fatorial Iterativo com While
function fatorialIterativo(n) {
    let resultado = 1;
    while (n > 1) {
        resultado *= n;
        n--;
    }
    return resultado;
}
console.log("Fatorial Iterativo (6):", fatorialIterativo(6));

// 5. Fatorial Recursivo com Operador Ternário
function fatorialRecursivo(n) {
    return n > 1 ? n * fatorialRecursivo(n - 1) : 1;
}
console.log("Fatorial Recursivo (6):", fatorialRecursivo(6));

// 6. Arrow Function (Sintaxe Enxuta)
const somaArrow = (n3, n4) => n3 + n4;
console.log("Soma Arrow Function (7 + 8):", somaArrow(7, 8));