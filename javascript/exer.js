// calculo da área de um círculo

const pi = 3.14;
console.log("-----Calculo da área do círculo------")
let raio = prompt ("qual o raio do círculo?")
raio = parseFloat(raio) // conversão de string para float
let area = pi * (raio * raio)
console.log("A área é " , area) // no console
alert("a área do círculo é " +area.toFixed(2))   

// digite o seu gênero 
let sexo = prompt('digite o sexo(M/F)');
sexo = sexo.toUpperCase()
if(sexo == 'M'){
    console.log('sexo é masculino')
    alert('seu sexo é masculino')
}
else if(sexo == 'F'){
    console.log('sexo feminino')
    alert('sexo feminino')
}
else{
    console.log('sexo não existe')
    alert('sexo não encontrado')
}  

// porcentagem de homens e mulheres em uma turma
console.log('Uma turma de alunos')
let h = prompt('Digite a quantidade de homens na turma:')
h = parseInt(h)
let m = prompt('Digite a quantidade de mulheres na turma:')
m = parseInt(m)
total = h + m
mulheres = (m * 100) / total
homens = (h * 100) / total
alert('a porcentagem de homens é:' + homens.toFixed(2)) 




