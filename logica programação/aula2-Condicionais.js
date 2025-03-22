const nmr = 22;
const dividoPor = nmr % 5 === 0;

if (nmr === 0) {
  console.log("numero é invalido");
} else if (dividoPor) {
  // else if pode ser feito quantas vezes quiser(possibilidade)
  console.log("é divisivel");
} else {
  //else sempre fechara a cadeia de if else
  console.log("sem chance de divisão");
}
