const valor_pago = 100;
const tipo_pagamento = "maisParcelas";
//seria possivel trocar a string 'debito' por numeros, apenas para ilutrar de forma mais clean.

if (tipo_pagamento === "debito") {
  const debito = valor_pago * 0.9;
  console.log(valor_pago);
  console.log("valor pago com desconto de 10%");
  console.log(debito);
} else if (tipo_pagamento === "dinheiroPix") {
  const dinheiroPix = valor_pago * 0.85;
  console.log(valor_pago);
  console.log("valor pago com desconto de 15%");
  console.log(dinheiroPix);
} else if (tipo_pagamento === "2x") {
  console.log("valor pago sem descontos");
  console.log(valor_pago);
} else {
  const juros = valor_pago * 0.1;
  const maisParcelas = juros + valor_pago;
  console.log(valor_pago);
  console.log("valor pago com acrescimo de 10%");
  console.log(maisParcelas);
}
/* esse exercicio teve uma resolução diferente a apresentada no curso
porem acho que por experiencia, acredito que dessa forma se torne mais pratico
visto a diminuição do codigo e das operações
exemplo (const debito = valor_pago + (valor_pago * 0.10), ou seja ele faz 2 contas para 
atingir o mesmo resultado, apenas invertir os valores da logica) */
