const { gets, print } = require("./importação");

const n = gets();
let numeroPar = null;
let numeroImpar = null;

for (let i = 0; i < n; i++) {
  const numeros = gets();

  if (numeros % 2 === 0) {
    if (numeroPar === null || numeros > numeroPar) {
      numeroPar = numeros;
    }
  } else {
    if (numeroImpar === null || numeros < numeroImpar) {
      numeroImpar = numeros;
    }
  }
}
print("Maior numero Par :" + numeroPar);
print("Menor numero impar :" + numeroImpar);
//nivel razoavel de dificuldade, logica pegou mesmo para entender, mas apos ficar claro
//foi facil fazer os if else.
