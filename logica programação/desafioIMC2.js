function IMC_cal(peso, altura) {
  //funçao do calculo
  return peso / Math.pow(altura, 2);
}

function classificacao(imc) {
  // função da classificação
  if (imc <= 18.5) {
    return "Abaixo do peso";
  } else if (imc > 18.5 && imc <= 25) {
    return "Peso normal";
  } else if (imc > 25 && imc <= 30) {
    return "Acima do peso";
  } else if (imc > 30 && imc <= 40) {
    return "Obesidade";
  } else {
    return "Obesidade mórbida";
  }
}

function main() {
  const peso = 75;
  const altura = 1.75;

  const imc = IMC_cal(peso, altura);
  console.log(imc.toFixed(2));
  console.log(classificacao(imc));
}

main();

/*(function() {
  const peso = 75;
  const altura = 1.75;

  const imc = IMC_cal(peso, altura);
  console.log(imc.toFixed(2));
  console.log(classificacao(imc));
})

();

desse modo é criado uma função invocada imediatamente
exclui a necessidade do 'main();' e do nome "main" para execuçao do codigo*/
//nota: usado em criação de site para isolar as funçoes dentro e fazendo executar uma vez apenas.
