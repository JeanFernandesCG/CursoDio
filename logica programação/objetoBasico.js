const jean = {
  //lembrar - sinal de igual atribui um valor ou mais.
  nome: "Jean Fernandes",
  idade: 30, //sem ;
}; //aqui tem para fechar

// possivel tambem incrementar o objeto criado
//atribuindo informações a ele.

jean.altura = 1.75;
delete jean.nome; //oculta o nome da impressao

console.log(jean);

const pessoa = {
  //criação de metodos para o objeto
  nome: "Arthur Tomas Trem",
  idade: 7,

  descrever: function () {
    //alem das informações possivel incluir funçoes a serem invocadas
    console.log(`Meu nome é ${this.nome} e Minha idade é ${this.idade}`);
  }, // usa acento com shift para imprimir texto junto com informaçoes, diferente das aspas que retorna apenas string
};

pessoa.descrever(); //aqui é feito a chamada do objeto, junto com a função DESCREVER.

//acessando de forma dinamica os atributos

console.log(pessoa["nome"]);// faz a chamada de forma direta do objeto retornando conteudo pela string.
console.log(pessoa['nome']) = 'Roberto'; // desse modo, vc passa uma nova informação para o nome.
// mesma coisa que = pessoa.nome = 'roberto'.


