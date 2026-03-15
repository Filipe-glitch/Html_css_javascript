let user1 = {
nome: "Pedro",
sobrenome: "Silva",
idade: 66,
email:"pedrosilva@email.com"
};

let user2 = {
nome: "Maria",
sobrenome: "Pilares",
idade: 21,
email: "mariapilares@email.com"
};

console.log(user1.nome); // -> Pedro
console.log(user2.nome); //-> Maria

let livro = new Object();
livro.titulo="A Bela e a Adormecida";
livro.autor="Neil Gaiman";
livro.editora="Rocco Jovens Leitores";
livro.anoPublicacao=2015;
livro.edicao="1ª";
livro.paginas=72;
livro.preco="R$ 30,00";
livro.frete=
function(ceporigem, cepdestino,peso){
   let valorFrete=" ";
 //script do calculo 
frete
   return valorFrete;
}

let livro2 = new Object();
livro2.titulo="O império";
livro2.autor="Neil Gaiman";
livro2.editora="Alamo";
livro2.anoPublicacao=2010;
livro2.edicao="1ª";
livro2.paginas=122;
livro2.preco="R$ 40,00";

console.log(livro2.anoPublicacao)
console.log(livro.autor)
alert("Autor: " + livro2.autor + "\nEditora: " + livro2.editora)

const carro = { // criação de um objeto carro
 marca: 'Marca',
 preco: 0,
}

// honda recebe a referência do objeto carro
const honda = carro; // não cria um novo objeto

// alterando propriedades do objeto
honda.marca = 'Honda';
honda.preco = 244000;

const nissan = carro;
nissan.marca = 'Nissan';
nissan.preco = 120000;

console.log(carro)
console.log(honda) // nos 3 irá aparecer a mesma coisa pois são o mesmo objeto
console.log(nissan)

function Carro() {
 this.marca = 'Marca';
 this.preco = 0;
}
const honda = new Carro(); // cria novos objetos
honda.marca = 'Honda';
honda.preco = 244000;
const fiat = new Carro();
fiat.marca = 'Nissan';
fiat.preco = 120000;

function Carro(marca, preco) { //cria objetos mas com parâmetros
 this.marca = marca;
 this.preco = preco;
}
const honda = new Carro('Honda', 244000);
const nissan = new Carro('Nissan', 120000);

function Carro(marca, precoInicial) {
 const taxa = 1.2;
 const precoFinal = precoInicial * taxa;
 this.marca = marca;
 this.preco = precoFinal;
 console.log(this);
}
const honda = new Carro('Honda', 244000);

let carro2 ={
portas: 4,
rodas:4,
marca: "Um carro"}
for (let detalhes in carro2){
console.log(detalhes+":"+ carro2[detalhes]);
}