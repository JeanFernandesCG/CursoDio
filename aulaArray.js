const alunos = ["Jean", "Renato", "Lucas"]; //uma array

alunos.push("Bruno"); //inserindo no final da lista o nome.
alunos[4] = "Eduardo"; //outra forma de inserir intens a lista.
// caso altere o numero dentro do colchetes ele ocupara o lugar da posicao indicada, independente de ocupação.
alunos.push(34); // é possivel tambem inserir varios tipos de itens.
alunos.pop(); // retira item do topo da lista.
alunos.shift(); // retira o primeiro iten da lista.
console.log(alunos);
