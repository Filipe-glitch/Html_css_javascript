let botao = document.querySelector("#botao"); //sempre colocar entre parenteses e aspas, não esquecer do # antes do nome da id.
botao.style.background="blue";
let quebrei = false;
let contacliques = 0;
botao.addEventListener("mouseover",e => {
    if(quebrei === false) //esse é a mesma coisa do último 
    botao.style.background="green"; //esse e => representa a função definida. sem precisarmos definir com um nome. veja abaixo como seria
    botao.style.color="white";
})
/* botao.addEventListener("mouseover",trocaverde); 
 function trocaverde(params) {
botao.style.background="green"
 }*/

botao.addEventListener("mouseout",e => {
    if(!quebrei)
    botao.style.background="blue";
})
botao.addEventListener("click",e => {
    contacliques++; //contacliques = contacliques + 1;
    if(contacliques >=10){
    botao.style.background="red"
    botao.innerHTML="quebrei"
    quebrei = true;
    }}
)

//exercicio : criar um botão cujo azul; assim que eu colocar o mouse sobre ele, ele ficar verde. e caso clicar 10 vezes, ele ficará vermelho exibindo a mensagem quebrei