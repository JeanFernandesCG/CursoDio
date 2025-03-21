// const entradas = [5.5]; CalMedia

const entradas = [1, 88, 22, 11, 13, 10];
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
