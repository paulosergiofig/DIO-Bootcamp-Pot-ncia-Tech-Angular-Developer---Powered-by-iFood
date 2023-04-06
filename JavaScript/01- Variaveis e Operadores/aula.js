let preco_combustivel = 5.19;
let consumo_medio = 9;
const distancia_viagem = 2 * 253;

const consumo_gasto = distancia_viagem / consumo_medio
const valor_gasto = consumo_gasto * preco_combustivel

console.log(valor_gasto.toFixed(2))