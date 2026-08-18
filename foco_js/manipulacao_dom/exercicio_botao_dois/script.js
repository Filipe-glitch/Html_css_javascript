console.log("Deus");
console.log("olá de novo");
let primeiroNome;
let nome1 = "eu";
console.log(typeof nome1);
idade = 4;
idade = idade + 6; 
let mensagem = `olá ${nome1}. sua idade é ${idade}`

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

let pessoa = { nome:"mario" , idade:31};
pessoa.nome= "luigi";
let listadedesejos = [ "peach", 6 ];
console.log(listadedesejos[0]); 

let paragrafo = document.querySelector("#pra1");
paragrafo.addEventListener("mouseover",mudaverde);
paragrafo.addEventListener("mouseout",mudavermelho);

function mudaverde(){
    paragrafo.style.background="green";
}
function mudavermelho(){
    paragrafo.style.background="red";
} 
