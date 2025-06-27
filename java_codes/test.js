console.log("Deus");
console.log("olá de novo");
let primeiroNome;
let nome1 = "eu";
console.log(typeof nome1);
idade = 4;
idade = idade + 6; // essa prevalece pois foi a ultima
let mensagem = `olá ${nome1}. sua idade é ${idade}`
/* isso substitui a concatenação 
let mensagem = "olá" + nome1 + "." + "sua idade é " + idade;*/
if(idade >= 18){
    console.log("seja bem vindo");
}
else{
console.log("você é menor de idade");
}
console.log(mensagem); 
let peso = false;
console.log(typeof peso);
//window.alert("cuidado")

let pessoa = { nome:"mario" , idade:31}; //aqui temos objetos definidos entre chaves
pessoa.nome= "luigi";
let listadedesejos = [ "peach", 6 ];//aqui temos uma lista de arrays e ela pode ter vários tipos de dados
console.log(listadedesejos[0]); //entre colchetes colocamos que elemento queremos da lista

/*
let paragrafo = document.querySelector("#pra1"); 

paragrafo.addEventListener('click',trocaTexto); 

function trocaTexto(){ 

paragrafo.innerHTML="ok"; 

} 
*/
let paragrafo = document.querySelector("#pra1");
paragrafo.addEventListener("mouseover",mudaverde);
paragrafo.addEventListener("mouseout",mudavermelho);

function mudaverde(){
    paragrafo.style.background="green";
}
function mudavermelho(){
    paragrafo.style.background="red";
} //cuidado com os atalhos pois os codigos podem existir mas os atalhos insistem em algo que não quer.
