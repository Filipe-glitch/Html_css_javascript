window.onload = function() {
 let Um = document.getElementById("def");//Aqui selecionamos o id "def"
 let Dois = document.getElementById("tipo");//Aqui selecionamos o id "tipo"
 Um.style.backgroundColor="#0cc";//Aqui atribuímos uma cor de fundo
 Dois.style.border="2px solid #0000ff";//Aqui atribuímos uma borda
}

let lista = document.getElementsByTagName('p'); //Seleciona todas as tags <p> da página.
console.log(lista[0]);  // ele dá um array de elementos
console.log(lista[1]);

let titulo = document.querySelector('h2'); //Seleciona o primeiro elemento(h2) que encontrar

let lista2 = document.getElementsByClassName('item') //Seleciona elementos com classe item.

document.querySelectorAll('p') //seleciona todos os <p> da página.

let textoP = document.querySelector("p").textContent; // pega o texto do primeiro <p>
console.log(textoP)

document.querySelector("p").textContent="Vamos ler também"; // substitui o texto do parágrafo.

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "<strong>Olá MUNDO!!!!!!!!!!!!!!!!!!!!</strong>";
// innerHTML permite colocar HTML dentro do elemento.

