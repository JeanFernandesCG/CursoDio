const numeros = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numeros.length; i++) {
  const parOUimpar = numeros[i];

  if (parOUimpar % 2 === 0) {
    console.log(`${numeros[i]} é um numero par`);
  } else {
    console.log(`${numeros[i]} é um numero impar`);
  }
}
