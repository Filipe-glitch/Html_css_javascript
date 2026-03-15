let dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
console.log(dias[0]); //segunda
console.log(dias[2]); // quarta

let frutas = [];
frutas[0] = "banana";
console.log(frutas[0]);

let usuarios = [ // array podemos colocar objetos também
 { //[0]
 nome: "Pedro",
 sobrenome: "Silva",
 idade: 66,
 email:"pedrosilva@email.com"
},
{ //[1]
 nome: "Maria",
 sobrenome: "Pilares",
 idade: 21,
 email: "mariapilares@email.com"
}
];
console.log(usuarios[0].nome); // Pedro
console.log(usuarios[1].idade); // 21

usuarios[2] = { // novo usuário
 nome: "Irene",
 sobrenome: "Souza",
 idade: 32,
 email: "irenesouza@email.com"
}
let indice = usuarios.findIndex(function(usuario){
  return usuario.nome === "Maria";
});
console.log(indice); // find index é usado para objetos com muitas propriedades

let nomes = ["Patricia", "Camila", "Mateus", "Samuel"];
console.log(nomes.indexOf("Samuel")); //3

nomes.push('JJ');
console.log(nomes); //['Patricia', 'Camila', 'Mateus', 'Samuel', 'JJ']

nomes.unshift("Maria");//['Maria', 'Patricia', 'Camila', 'Mateus', 'Samuel', 'JJ']

let nome = nomes.pop(); // tira o último elemento e coloca ele na variável nome
console.log(nomes.length) //5
console.log(nome); // JJ
console.log(nomes); // ['Maria', 'Patricia', 'Camila', 'Mateus', 'Samuel']

let nome2=nomes.shift();// elimina o primeiro elemento 
console.log(nomes.length); 
console.log(nome2); 
console.log(nomes);

nomes.reverse() // inverte a ordem dos elementos
console.log(nomes)

let e1 = nomes.slice(2) // [Mateus]
let e2 = nomes.slice(1,3); //[Camila, Samuel]

let maisnomes=["José","Pedro"];
nomesjuntos=nomes.concat(maisnomes);
console.log(nomes); 
console.log(maisnomes); 
console.log(nomesjuntos);

let valores = [10, 30, 40];
let sum = 0;
for (let i = 0; i < valores.length; i++) {
 sum += valores[i];
}
console.log(sum);

let valores2 = [10, 30, 40]; // esse for...of é focado em arrays.
let sum2 = 0;
for (let number of valores2) {
 sum2 += number;
}
console.log(sum2);

let pessoas = [// outro exemplo
 {
 nome: "Pedro",
 sobrenome: "Silva",
 idade: 66,
 email: "pedrosilva@email.com"
},
{
 nome: "Maria",
 sobrenome: "Pilares",
 idade: 21,
 email: "mariapilares@email.com"
}
];
for (let pessoa of usuarios){
    console.log(pessoa);
}







