let tempoTimeout;
let meuIntervalo = setInterval(alternarCorFundo, 500);

function executarTimeout() {
    tempoTimeout = setTimeout(exibirAlerta, 2000);
}

function exibirAlerta() {
    alert("Olá Mundo!");
}

function alternarCorFundo() {
    let corpoPagina = document.body;
    corpoPagina.style.backgroundColor = corpoPagina.style.backgroundColor === "gray" ? "white" : "gray";
}

function paraCor() {
    clearInterval(meuIntervalo);
}