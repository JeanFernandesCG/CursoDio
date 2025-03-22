class Carros {
  marca;
  cor;
  mediaKm;

  constructor(marca, cor, mediaKm) {
    this.marca = marca;
    this.cor = cor;
    this.mediaKm = mediaKm;
  }

  GastoViajem(distanciaKm, valorCombustivel) {
    return distanciaKm * this.mediaKm * valorCombustivel;
  }
}

const carro1 = new Carros("Gol", "Azul", 1 / 12);
const carro2 = new Carros("Opala", "Preto", 1 / 6);

console.log(carro1);
console.log(
  "o valor gasto em combustivel: " + carro1.GastoViajem(100, 5.7).toFixed(2)
);
