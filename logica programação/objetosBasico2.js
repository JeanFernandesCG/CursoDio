/*class Pessoa {
  //criação de uma classe e instancias
  nome;
  idade;
  descreva() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`);
  }
}

const jean = new Pessoa(); //criação das instancias
jean.nome = "Jean Fernandes";
jean.idade = 30;

const arthur = new Pessoa();
arthur.nome = "Arthur Flores";
arthur.idade = 7;

console.log(arthur); // impressao dos dados (alterando apenas a instancia)

jean.descreva(); // impressao direta da instancia usando função criada no objeto(agora na classe)
*/

class Pessoa {
  nome; // padrao dos objetos
  idade;
  anoNascimento;
  constructor(nome, idade) {
    // criação de instancia com constructor
    this.nome = nome; //padronização das instancias
    this.idade = idade;
    this.anoNascimento = 2025 - idade;
  }
  descreva() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`);
  }
}

/*const jean = new Pessoa("Jean", 30); // passagem de informações seguindo o padrao
const arthur = new Pessoa("Arthur", 7);

console.log(jean); // impressao dos dados (alterando apenas a instancia)

jean.descreva(); // impressao direta da instancia usando função criada no objeto(agora na classe)
*/

function comparar(p1, p2) {
  // criação de uma função que utiliza a classse para executar
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const jean = new Pessoa("Jean Fernandes", 30);

const arthur = new Pessoa("Arthur Flores", 7);

comparar(jean, arthur); // chama a função e passa as duas instancias a serem comparadas.
