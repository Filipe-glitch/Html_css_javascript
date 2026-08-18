// 1. Instanciação e Exibição de Data Atual
const agora = new Date();
console.log("Data Atual:", agora);

// 2. Extração de Componentes Especificados
let dataNascimento = new Date('May 26, 1990');
console.log("Dia do Mês:", dataNascimento.getDate()); // Retorna 26

const dataAtual = new Date();
console.log("Dia da Semana (Índice):", dataAtual.getDay());

let arrayDias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
let indiceDia = dataAtual.getDay();
console.log("Nome do Dia da Semana:", arrayDias[indiceDia]);

let dataAno = new Date('May 26, 1990');
console.log("Ano Completo:", dataAno.getFullYear());

let dataHora = new Date('May 26, 1990 04:40:36');
console.log("Horas:", dataHora.getHours());
console.log("Mês (Índice 0-11):", dataHora.getMonth()); // 4 (Maio)
console.log("Milissegundos Timestamp:", dataHora.getTime());

// 3. Algoritmo: Cálculo de Dias Restantes para o Natal
function calcularDiasParaNatal() {
    let hoje = new Date();
    let anoCorrente = hoje.getFullYear();
    let diaNatal = new Date(anoCorrente, 11, 25); // Mês 11 = Dezembro

    // Se o Natal deste ano já passou, ajusta para o próximo ano
    if (hoje > diaNatal) {
        diaNatal = new Date(anoCorrente + 1, 11, 25);
    }

    let diferencaMs = diaNatal.getTime() - hoje.getTime();
    let milissegundosPorDia = 24 * 60 * 60 * 1000;
    let diasFaltando = Math.ceil(diferencaMs / milissegundosPorDia);

    console.log(`Faltam ${diasFaltando} dias para o Natal.`);
}

calcularDiasParaNatal();