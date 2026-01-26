alert('hi'); /* Mostra uma caixinha de alerta, forma simples de interagir com o usuário.*/
document.body.innerHTML =  'Bem vindo ao curso de JS';
/* document: ele representa a página inteira carregada (DOM = Document Object Model).
body: ele pega a parte <body> do HTML.
innerHTML: é o conteúdo interno (HTML/texto) do elemento.
Esse comanndo apaga tudo o que tem dentro do <body> e coloca no lugar apenas o texto escrito aqui. */
4 * 5, 45 / 5, 45 % 4, 77 - 8, (45 * 4) / 1, 48.4 * 2;
Math.abs(-655); // transforma números negativos em inteiros
Math.floor(89.4); //arredonda pra baixo, 89
Math.ceil(89.4); //arredonda pra cima
Math.round(89.4); //arredondamento normal, para cima ou para baixo
Math.trunc(89.4); //
Math.min(4, 7, 9, 78); // ele irá me devolver o menor valor
Math.max(7, 9, 787, 655); // ele irá me devolver o maior valor
Math.pow(6, 2); // pow(base = 6, expoente = 2) ou 6 ** 2
Math.sqrt(40); //square root = raiz quadrada
Math.cbrt(27); //cube root = raiz cubica
Math.random(); //GERA um número aleatório entre 0 e 1
Math.random() * 10// se quiser um número entre 0 e 10
Math.floor(Math.random() * 10) // 0 até 9 , e será um número inteiro 
Math.sign(45); // Retorna o 1 se for positivo, 0 se for zero e -1 se for negativo
Math.sin(Math.PI / 2) //Math.PI/2 é 90 graus em radianos. sin=seno. 
// javascript usa radianos e não graus
Math.cos(45) //cosseno
Math.tan(12) //tangente
Math.log(Math.E) //Math.E é a constante de Euler, Math.log(x) é o logaritmo natural(base e)
Math.log10(99) // logaritmo na base 10
Math.exp(1) // calcula e elevado à potência 1. e é a contante de euler
Math.hypot(4, 6) //Calcula a hipotenusa de um triângulo retângulo com catetos 4 e 6.
Math.fround(6, 6) //arredonda o número para precisão de 32 bits (float). Aceita um argumento. O , 6 depois é ignorado.
Math.clz32(2) //conta os zeros à esquerda no número binário.
Math.imul(6, 3)//multiplicação de inteiros de 32 bits.útil em gráficos e performance
Math.atan2(2, 2)//Retorna o ângulo em radianos entre o ponto (2, 2) e a origem (0, 0).
3 << 2 //deslocamento de bits para a esquerda.
16 >>> 2 //deslocamento lógico à direita.
//porcentagem que ser na mão : 10/100 = 10%

'eleph' + 'ant1' + 15 //concatenação
typeof 'fjdj' //typeof me diz o tipo de dado que estou colocando
'R$' + 39
'5' + 50 + 68 + 98 //sai 5506898
45 + (45 + 98) // sai a soma
//No JavaScript, quando você usa o operador + ,se ambos os lados forem números ele soma. Se um dos lados for string ele converte o outro em string e faz concatenação.
'world'.charAt(1) //retorna o caractere na posição que vc definir começando pelo zero
'world'.charCodeAt(1) //Retorna o código Unicode do caractere na posição que vc definir
'HI'.concat('', 'there') //junta strings
'HELLO'.endsWith() //verifica se a string termina com um trecho específico.
'hello'.includes() //verifica se a string contém um trecho.
'hello'.indexOf() //string.indexOf(searchValue, startIndex), searchValue: o que você está procurando. startIndex (opcional): de onde começa a busca (padrão é 0). 
// "hello".indexOf("l", 3)   // 3  (começando do índice 3, acha o "l" em 3), se voltar -1 é pq não achou.
'hii'.lastIndexOf() //procura a última ocorrência do trecho. string.lastIndexOf(searchValue, fromIndex), fromIndex (opcional): de onde começa a busca, mas olhando de trás pra frente.
//"hello".lastIndexOf("l", 2)   // 2 (começa do índice 2 pra trás, acha "l" em 2)
'hello'.match() //procura correspondências usando expressões regulares (regex). Se o regex não tiver a flag g (global), retorna só a primeira correspondência e informações extras. Se o regex tiver a flag g, retorna um array com todas as correspondências. Se não encontrar nada: retorna null. 
"hello".match(/l/)       // [ "l", index: 2, input: "hello", ... ]
"hello".match(/l/g)      // [ "l", "l" ]   (todas as ocorrências)
'low'.repeat(5) //irá repetir a string 5 vezes
'bpple'.replace('b', 'a') //substitui a primeira ocorrência
'hello'.replaceAll('l', 'y') //substitui todas as ocorrências
'heppppo'.search(/p/) //retorna o índice da primeira correspondência com uma expressão regular. se não encontrar nada ele retorna -1.