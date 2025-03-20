const { gets, print } = require("./importação");

const nmrosSorteio = [];

for (let i = 0; i < 5; i++) {
  const nmrSorteio = gets();
  nmrosSorteio.push(nmrSorteio);
}

let maiorValor = 0;
for (let i = 0; i < nmrosSorteio.length; i++) {
  const nmrSorteio = nmrosSorteio[i];
  if (nmrSorteio > maiorValor) {
    maiorValor = nmrSorteio;
  }
}
/* OUTRO MODO SIMPLIFICADO
const{gets, print}...
let maiorValorEncontrado = 0;
const quantidadeAlunos = gets();

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado;
  }
}
print(maiorValor); */
