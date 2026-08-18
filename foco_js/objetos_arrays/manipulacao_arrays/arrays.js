let dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
console.log(dias[0]); // Segunda
console.log(dias[2]); // Quarta

let frutas = [];
frutas[0] = "banana";
console.log(frutas[0]);

let usuarios = [
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
console.log(usuarios[0].nome); // Pedro
console.log(usuarios[1].idade); // 21

usuarios[2] = {
    nome: "Irene",
    sobrenome: "Souza",
    idade: 32,
    email: "irenesouza@email.com"
};

let indice = usuarios.findIndex(function(usuario) {
    return usuario.nome === "Maria";
});
console.log(indice); // Retorna o índice do objeto buscado

let nomes = ["Patricia", "Camila", "Mateus", "Samuel"];
console.log(nomes.indexOf("Samuel")); // 3

nomes.push('JJ');
console.log(nomes); // ['Patricia', 'Camila', 'Mateus', 'Samuel', 'JJ']

nomes.unshift("Maria"); // ['Maria', 'Patricia', 'Camila', 'Mateus', 'Samuel', 'JJ']

let nomeRemovidoFim = nomes.pop(); // Remove o último elemento
console.log(nomes.length); // 5
console.log(nomeRemovidoFim); // JJ
console.log(nomes); // ['Maria', 'Patricia', 'Camila', 'Mateus', 'Samuel']

let nomeRemovidoInicio = nomes.shift(); // Remove o primeiro elemento
console.log(nomes.length);
console.log(nomeRemovidoInicio);
console.log(nomes);

nomes.reverse(); // Inverte a ordem dos elementos
console.log(nomes);

let e1 = nomes.slice(2);
let e2 = nomes.slice(1, 3);

let maisNomes = ["José", "Pedro"];
let nomesJuntos = nomes.concat(maisNomes);
console.log(nomes);
console.log(maisNomes);
console.log(nomesJuntos);

let valores = [10, 30, 40];
let sum = 0;
for (let i = 0; i < valores.length; i++) {
    sum += valores[i];
}
console.log(sum);

let valores2 = [10, 30, 40];
let sum2 = 0;
for (let number of valores2) {
    sum2 += number;
}
console.log(sum2);

for (let pessoa of usuarios) {
    console.log(pessoa);
}