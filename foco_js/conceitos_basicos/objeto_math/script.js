document.body.innerHTML = 'Bem vindo ao curso de JS';

Math.abs(-655);                           // Converte números negativos em positivos: 655
Math.floor(89.4);                         // Arredonda para baixo: 89
Math.ceil(89.4);                          // Arredonda para cima: 90
Math.round(89.4);                         // Arredondamento normal: 89
Math.trunc(89.4);                         // Descarta as casas decimais: 89
Math.min(4, 7, 9, 78);                    // Retorna o menor valor: 4
Math.max(7, 9, 787, 655);                 // Retorna o maior valor: 787
Math.pow(6, 2);                           // Potenciação: 36
Math.sqrt(40);                            // Raiz quadrada
Math.cbrt(27);                            // Raiz cúbica: 3
Math.random();                            // Gera número aleatório entre 0 e 1
Math.floor(Math.random() * 10);           // Gera inteiro aleatório entre 0 e 9
Math.sign(45);                            // Retorna 1 para positivo, 0 para zero, -1 para negativo
Math.sin(Math.PI / 2);                    // Seno de 90 graus (em radianos)
Math.cos(45);                             // Cosseno
Math.tan(12);                             // Tangente
Math.log(Math.E);                         // Logaritmo natural
Math.log10(99);                           // Logaritmo base 10
Math.exp(1);                              // Constante de Euler e^1
Math.hypot(4, 6);                         // Calcula hipotenusa dos catetos 4 e 6
Math.fround(6.6);                         // Arredonda para precisão float (32-bit)
Math.clz32(2);                            // Conta zeros à esquerda em representação binária de 32 bits
Math.imul(6, 3);                          // Multiplicação de inteiros de 32 bits
Math.atan2(2, 2);                         // Ângulo em radianos entre o ponto (2, 2) e a origem

// Operações Bitwise
console.log(3 << 2);                      // Deslocamento de bits para a esquerda: 12
console.log(16 >>> 2);                    // Deslocamento lógico à direita: 4