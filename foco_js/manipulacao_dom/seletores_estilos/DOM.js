window.onload = function() {
    let elementoDef = document.getElementById("def");
    let elementoTipo = document.getElementById("tipo");

    if (elementoDef) {
        elementoDef.style.backgroundColor = "#0cc";
    }
    if (elementoTipo) {
        elementoTipo.style.border = "2px solid #0000ff";
    }
};

// Seleção de múltiplos elementos por Tag
let listaParagrafos = document.getElementsByTagName('p');
console.log(listaParagrafos[0]);
console.log(listaParagrafos[1]);

// Seleção do primeiro elemento <h2>
let primeiroTitulo = document.querySelector('h2');

// Seleção de elementos por Classe
let itensClasse = document.getElementsByClassName('item');

// Seleção de todos os <p> via QuerySelectorAll
let todosParagrafos = document.querySelectorAll('p');

// Leitura e alteração de texto/HTML
let primeiroP = document.querySelector("p");
if (primeiroP) {
    console.log(primeiroP.textContent);
    primeiroP.textContent = "Vamos ler também";
    primeiroP.innerHTML = "<strong>Olá MUNDO!!!!!!!!!!!!!!!!!!!!</strong>";
}