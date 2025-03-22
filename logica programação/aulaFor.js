/*for (let i = 0; i < 10; index++) {
  //1º declaração da variavel; 2º condicional de parada e 3º contador.
  console.log(i);
}  ESTRUTURA DO FOR

const nome = "Jean Fernandes Flores"; //string = lista de caracteres

for (let i = 0; i < nome.length; i++) {
  //nome.length (para dizer o tamanho do 'nome')
  console.log(nome[i]);
} FOR COM STRING*/

const notas = [];

notas.push(6);
notas.push(7);
notas.push(6);
notas.push(5);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

const media = soma / notas.length;
console.log(soma);
console.log(media.toFixed(2));

/* DEPURAÇÃO DE CODIGO: a esqueda do numero no vs a um ponto vermelho que serve para parar o codigo.
possivel executar linha apos linha, usando um console.log para verificar se esta funcionando.
usando o vs é possivel clicar no bug+play e iniciar uma depuração, onde ele vai mostrar os passo a passo e informar "resultados"
*/
