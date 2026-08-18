// 1. Objetos Literais
let user1 = {
    nome: "Pedro",
    sobrenome: "Silva",
    idade: 66,
    email: "pedrosilva@email.com"
};

let user2 = {
    nome: "Maria",
    sobrenome: "Pilares",
    idade: 21,
    email: "mariapilares@email.com"
};

console.log("User 1 Nome:", user1.nome);
console.log("User 2 Nome:", user2.nome);

// 2. Instanciação com new Object() e Métodos
let livro1 = new Object();
livro1.titulo = "A Bela e a Adormecida";
livro1.autor = "Neil Gaiman";
livro1.editora = "Rocco Jovens Leitores";
livro1.anoPublicacao = 2015;
livro1.edicao = "1ª";
livro1.paginas = 72;
livro1.preco = "R$ 30,00";
livro1.calcularFrete = function(cepOrigem, cepDestino, peso) {
    let valorFrete = 15.00;
    return valorFrete;
};

let livro2 = new Object();
livro2.titulo = "O Império";
livro2.autor = "Neil Gaiman";
livro2.editora = "Álamo";
livro2.anoPublicacao = 2010;
livro2.edicao = "1ª";
livro2.paginas = 122;
livro2.preco = "R$ 40,00";

console.log("Livro 2 Ano:", livro2.anoPublicacao);
console.log("Livro 1 Autor:", livro1.autor);

// 3. Referência de Objetos x Novas Instâncias
const carroModelo = {
    marca: 'Genérico',
    preco: 0
};

// Atribuição por referência (ambas as variáveis apontam para o mesmo objeto)
const carroRef1 = carroModelo;
carroRef1.marca = 'Honda';
carroRef1.preco = 244000;

// 4. Função Construtora (Instanciação com new)
function Carro(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;

    this.marca = marca;
    this.preco = precoFinal;
}

const honda = new Carro('Honda', 200000);
const nissan = new Carro('Nissan', 100000);

console.log("Objeto Honda:", honda);
console.log("Objeto Nissan:", nissan);

// 5. Iteração em Objetos com for...in
let veiculo = {
    portas: 4,
    rodas: 4,
    marca: "Veículo Executivo"
};

for (let propriedade in veiculo) {
    console.log(`${propriedade}: ${veiculo[propriedade]}`);
}