function olaMundo() {
 console.log('ola');
 console.log('mundo');
}
olaMundo(); // para chamar a função. 

function mostrarMsg(){
 console.log("mensagem A");
 return;
 console.log("mensagem B");
}
mostrarMsg(); //exibirá só a mensagem A pois return está depois de A e não B

function somar(num1, num2) { //parâmetros num1 e num2
return num1 + num2;
}
somar(35,2); // o resultado será 37

function fatorial (n) { // fatorial de um número.
 let resultado = 1;
 while (n > 1) {
 resultado *= n;
 n--;
 }
 return resultado;
}
console.log(fatorial(6));

function fatorial (n) { // fatorial de um número usando operador ternário
 return n > 1 ? n * fatorial(n - 1) : 1;
}
console.log(fatorial(6)); // -> 720

let soma=(n3,n4) =>n3+n4; // função arroy
console.log(soma(7,8)); // 15

const agora= new Date();
alert(agora) //'Thu Jan 19 2023 18:44:38 GMT-0300 (Horário Padrão de Brasília)'

let data = new Date('May 26, 1990')
alert(data.getDate()) //volta o dia, no caso 26

const data2 = new Date();
console.log(data2.getDay()); // Número equivalente ao dia de hoje, 0 é domingo, 1 é segunda ...
let arrayDias = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado']; 
let i = data2.getDay();
console.log(arrayDias[i]); // código para exibir o nome do dia da semana.

let data3 = new Date('May 26, 1990')
alert(data3.getFullYear()) // Exibe 1990

let data4 = new Date('May 26, 1990 04:40:36')
alert(data4.getHours()) // Exibe 4

let data5 = new Date('May 26, 1990 04:40:36')
alert(data5.getMonth()) // 4 , porque janeiro é zero e assim sucessivamente

const dia = new Date('May 26, 1990 04:40:36');
alert(dia.getTime()); //milisegundos entre objeto date e hora base(1 de janeiro de 1970)

//código para descobri quanto tempo falta para o natal
let hoje, anoCorrente, diaNatal,diferenca,umDia,diasFaltando; // instanciamento das variáveis
hoje = new Date(); // criamos a hora e data atual
anoCorrente = hoje.getFullYear(); //armazenamos o ano corrente numa variável
diaNatal = new Date(anoCorrente,11,25); //criamos o dia do natal do ano corrente
diferenca = diaNatal.getTime()-hoje.getTime(); // armazenamos a diferença em milissegundos entre o natal e o dia de hoje
umDia = 24 * 60 * 60 * 1000; //armazenamos o tempo de um dia em milisegundos
diasFaltando = Math.ceil(diferenca/umDia); // calculamos quantos dias faltam para o natal. Arredondamos para o inteiro superior com o método Math.ceil().






