function Nome(nome) {
  console.log("meu nome é: " + nome);
}

function Idade(idade) {
  if (idade < 18) {
    console.log("sou menor de idade");
  } else {
    console.log("sou maior de idade");
  }
}

function main() {
  nome = "Jean";
  idade = 30;

  Nome(nome);
  console.log("tenho: " + idade);
  Idade(idade);
}

main();
