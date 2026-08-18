const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const resposta = document.querySelector("#resposta");

seletor.addEventListener("change", calcular);
campo1.addEventListener("input", calcular);
campo2.addEventListener("input", calcular);

function calcular() {
    const val1 = campo1.value.trim();
    const val2 = campo2.value.trim();

    if (val1 === '' || val2 === '') {
        resposta.classList.add("problema");
        resposta.innerHTML = "Preencha os dois campos";
        return;
    }

    resposta.classList.remove("problema");
    const valor1 = parseFloat(val1);
    const valor2 = parseFloat(val2);
    const operacao = seletor.value;

    let resultado = 0;

    switch (operacao) {
        case "somar":
            resultado = valor1 + valor2;
            break;
        case "subtrair":
            resultado = valor1 - valor2;
            break;
        case "multiplicar":
            resultado = valor1 * valor2;
            break;
        case "dividir":
            resultado = valor2 !== 0 ? valor1 / valor2 : "Divisão por zero!";
            break;
    }

    resposta.innerHTML = resultado;
}