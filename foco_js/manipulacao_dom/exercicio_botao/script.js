// Exercício: Criar um botão azul que fica verde ao passar o mouse.
// Caso seja clicado 10 vezes, fica vermelho e exibe a mensagem "quebrei".

let botao = document.querySelector("#botao");
botao.style.background = "blue";
botao.style.color = "white";

let quebrei = false;
let contaCliques = 0;

// Arrow function para o evento mouseover
botao.addEventListener("mouseover", () => {
    if (!quebrei) {
        botao.style.background = "green";
    }
});

// Arrow function para o evento mouseout
botao.addEventListener("mouseout", () => {
    if (!quebrei) {
        botao.style.background = "blue";
    }
});

// Arrow function para o evento click com contagem
botao.addEventListener("click", () => {
    if (!quebrei) {
        contaCliques++;
        if (contaCliques >= 10) {
            botao.style.background = "red";
            botao.innerHTML = "Quebrei!";
            quebrei = true;
        }
    }
});