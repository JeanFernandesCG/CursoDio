/*Faça um programa que receba a media de um AudioWorkletNode.
caso a media seja menor que 5 imprima "reprovado"
caso a media seja maior ou igual a 5 e menor que 7 "recuperação"
caso a media seja maior ou igual a 7 retorne "aprovado"
*/

const { gets, print } = require("./importação");

const media = gets();

if (media >= 7) {
  print(media.toFixed(2));
  print("Aprovado");
} else if (media < 7 && media >= 5) {
  print(media.toFixed(2));
  print("Recuperação");
} else {
  print(media.toFixed(2));
  print("Reprovado");
}

// confesso que demorei pra fazer pois tinha entendido o exercicio errado,
// mas ao entender a resolução foi rapida
