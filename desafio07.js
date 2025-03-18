class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    // colocar oq sera passado para a classe
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC(/* inserir aqui apenas coisas fora da classe*/) {
    return this.peso / (this.altura * this.altura);
  }
  classifcarIMC() {
    const imc = this.calcularIMC();
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
}

const jose = new Pessoa("José", 70, 1.75);

console.log(jose);
console.log(jose.calcularIMC().toFixed(2));
console.log(jose.classifcarIMC());
