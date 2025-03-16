function aplicaDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}
function adicionaJuros(valor, juros) {
  return valor + valor * (juros / 100);
}
function main() {
  const valor_pago = 150;
  const tipo_pagamento = 3; // 0= pix,dinheiro - 1= debito - 2= até 2vezes - 3ou mais = parcelas

  if (tipo_pagamento === 1) {
    console.log(aplicaDesconto(valor_pago, 10));
    console.log("valor pago com desconto de 10%");
  } else if (tipo_pagamento === 0) {
    console.log(aplicaDesconto(valor_pago, 15));
    console.log("valor pago com desconto de 15%");
  } else if (tipo_pagamento === 2) {
    console.log(valor_pago);
    console.log("valor pago sem descontos");
  } else {
    console.log(adicionaJuros(valor_pago, 10));
    console.log("valor pago com acrescimo de 10%");
  }
}
main();
