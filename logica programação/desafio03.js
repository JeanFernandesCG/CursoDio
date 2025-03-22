const nota1 = 0;
const nota2 = 10;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log(media.toFixed(2));
  console.log("Aprovado");
} else if (media < 7 && media >= 5) {
  console.log(media.toFixed(2));
  console.log("Recuperação");
} else {
  console.log(media.toFixed(2));
  console.log("Reprovado");
}
