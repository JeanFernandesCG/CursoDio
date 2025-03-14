const peso = 75;
const altura = 1.75;
const imc = peso / (altura * altura);

if (imc <= 18.5) {
  console.log(imc.toFixed(2));
  console.log("Abaixo do peso");
} else if (imc > 18.5 && imc <= 25) {
  console.log(imc.toFixed(2));
  console.log("Peso normal");
} else if (imc > 25 && imc <= 30) {
  console.log(imc.toFixed(2));
  console.log("Acima do peso");
} else if (imc > 30 && imc <= 40) {
  console.log(imc.toFixed(2));
  console.log("Obesidade");
} else {
  console.log(imc.toFixed(2));
  console.log("Obesidade mórbida");
}
