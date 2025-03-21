/* Faça um program que calcule e imprima o salario a ser transferido para um 
funcionario. Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios
O salario a ser transferido é calculado da seguinte forma:

valor bruto do salario - porcentagem do imposto referente ao salario + beneficios;
Para calcular o percentual de imposto segue as aliquotas:
de 0 a 1100 - 5%
de 1100 a 2500 - 10%
mais que 2500 - 15%
 */

const { gets, print } = require("./importação");

const salarioBruto = gets();
const beneficios = gets();

if (salarioBruto <= 1100) {
  const desconto = salarioBruto * 0.95;
  const salarioLiq = desconto + beneficios;
  print("é transferido o salario liquido no valor de: " + salarioLiq);
} else if (salarioBruto >= 1100 && salarioBruto <= 2500) {
  const desconto = salarioBruto * 0.9;
  const salarioLiq = desconto + beneficios;
  print("é transferido o salario liquido no valor de: " + salarioLiq);
} else {
  const desconto = salarioBruto * 0.85;
  const salarioLiq = desconto + beneficios;
  print("é transferido o salario liquido no valor de: " + salarioLiq);
}
