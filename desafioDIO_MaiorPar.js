const { gets, print } = require("./importação");

const numeros = [];
let numeroPar = 0;
let numeroImpar = 0;

for (let i = 0; i < 6; i++) {
  const parOUimpar = gets();
  if (parOUimpar % 2 === 0) {
    if (parOUimpar > numeroPar) {
      numeroPar = parOUimpar;
    }
  } else {
    if (numeroImpar === 0) {
      numeroImpar = parOUimpar;
    } else if (parOUimpar < numeroImpar) {
      numeroImpar = parOUimpar;
    }
  }
}
print(`maior numero par: ${numeroPar}`);
print(`maior numero par: ${numeroImpar}`);
//nivel razoavel de dificuldade, logica pegou mesmo para entender, mas apos ficar claro
//foi facil fazer os if else.
