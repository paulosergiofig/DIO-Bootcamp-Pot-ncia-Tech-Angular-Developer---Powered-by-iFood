const preco_etanol = 4.19;
const preco_gasolina = 5.19;
const tipo_combustivel = 'gasolina';
const consumo_medio = 9;
const distancia_viagem = 2 * 295;

const consumo_combustivel = distancia_viagem / consumo_medio;

if (tipo_combustivel === 'diesel') {
    console.log("COMBUSTÍVEL NÃO ACEITO!")
} else if (tipo_combustivel === 'gasolina') {
    preco_combustivel = preco_gasolina;
    const valor_gasto = consumo_combustivel * preco_combustivel;
    console.log(valor_gasto.toFixed(2))

} else {
    preco_combustivel = preco_etanol;
    const valor_gasto = consumo_combustivel * preco_combustivel;
    console.log(valor_gasto.toFixed(2))
}
