const calcular = document.getElementById(`btnCalcular`);

function CalcularCalorias() {
    const nome = document.getElementById(`nome`).value;
    const peso = document.getElementById(`peso`).value;
    const distancia = document.getElementById(`distancia`).value;
    const tempo = document.getElementById(`tempo`).value;
    const resultado = document.getElementById(`pResultado`);

    if (nome !== '' && distancia !== '' && peso !== '' && tempo !== '') {
        let split_tempo = tempo.split(":");
        let horastotais = parseInt(split_tempo[0]) + parseInt(split_tempo[1] / 60) + parseInt(split_tempo[2] / 3600);
        let velocidade = (parseFloat(distancia) / horastotais).toFixed(2);
        let pace = (parseInt(split_tempo[0] * 60) + parseInt(split_tempo[1]) / parseFloat(distancia)).toFixed(2);
        let caloria = (velocidade * peso * 0.0175 * (parseInt(split_tempo[0]) * 60 + parseInt(split_tempo[1]))).toFixed(3);

        resultado.removeAttribute(`style`);
        resultado.textContent = `Olá, ${nome}! Você percorreu ${distancia} km em ${split_tempo[0]}h, ${split_tempo[1]} min e ${split_tempo[2]}s. Isso quer dizer que a sua velocidade média foi de ${velocidade} km/h, o que o corresponde a um pace de ${pace} min/km. Com ${peso}kg, você gastou cerca de ${caloria} cal por minuto.`;
    }else {
        resultado.removeAttribute(`style`);
        resultado.textContent = `Preencha todos os campos para calcular.`;
    }
}

calcular.addEventListener(`click`, CalcularCalorias);
