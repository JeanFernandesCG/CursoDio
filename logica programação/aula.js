const preco_gas = 6.47; //valor do combustivel infelizmente
const media_Km = 13; // 13 km por litro media de carro popular
const distancia = 1787; // distancia da viagem
const litros = distancia / media_Km; // litros consumidos na viagem
const valor_pago = litros * preco_gas;

console.log(valor_pago.toFixed(2));
