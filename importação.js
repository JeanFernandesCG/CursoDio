// const entradas = [5.5]; CalMedia

//const entradas = [5, 1, 4, 3, 10, 18]; par ou impar

const entradas = [2000, 250];
let i = 0;

function gets() {
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}
module.exports = { gets, print };
//module.exports.gets = gets; - outro modo
