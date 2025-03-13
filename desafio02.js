const preco_gas = 6.47;
const preco_etanol = 5.7;
let tipo_carro = "gasolina"; // altere entre gasolina e etanol
const media_Km_gas = 13;
const media_Km_etl = 11.7;
const distancia = 1787;

if (tipo_carro == "gasolina") {
  const litros = distancia / media_Km_gas;
  const valor_pago = litros * preco_gas;
  console.log(valor_pago.toFixed(2));
}
if (tipo_carro == "etanol") {
  const litros = distancia / media_Km_etl;
  const valor_pago = litros * preco_etanol;
  console.log(valor_pago.toFixed(2));
}
