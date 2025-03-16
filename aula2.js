function contador(numero) {
  //"()" insira os parametros da função
  console.log("mil e " + numero); // com parametros passado é possivel :
}

contador("um");
contador("dois");
// é passado um parametro para função(numeros) e dentro da função executa o console.log
//assim pra cada execução ele repete o mil e um e acrescenta o q foi passado .

function quadrado(valor) {
  return valor * valor; //é possivel retornar valores apos execução de um funçao
}

const quadradovalor = quadrado(10);
console.log(quadradovalor); //assim sera impresso o resultado.
console.log(quadradovalor + quadradovalor); // é possivel tmb realizar operações com esses resultados

function add_juros(valor, percentalJuros) {
  //criação de um função simples para acrescimo de juros.
  const valorAcrescimo = (percentalJuros / 100) * valor;
  return valor + valorAcrescimo;
}

console.log(add_juros(150, 10));
console.log(add_juros(180, 15));
console.log(add_juros(130, 20));
