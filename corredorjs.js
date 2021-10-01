const calcular = document.getElementById(`btnCalcular`);

function CalcularCalorias() {
    const nome = document.getElementById(`nome`).value;
    const peso = document.getElementById(`peso`).value;
    const distancia = document.getElementById(`distancia`).value;
    const horas = document.getElementById(`horas`).value;
    const minutos = document.getElementById(`minutos`).value;
    const segundos = document.getElementById(`segundos`).value;
    const resultado = document.getElementById(`pResultado`);

    if (nome !== '' && distancia !== '' && peso !== '' && horas !== '' && minutos !== '' && segundos !== '') {
        let horastotais = parseInt(horas) + parseInt(minutos / 60) + parseInt(segundos / 3600);
        let velocidade = (parseFloat(distancia) / horastotais).toFixed(2);
        let pace = (parseInt(horas * 60) + parseInt(minutos) / parseFloat(distancia)).toFixed(2);
        let caloria = (velocidade * peso * 0.0175 * (parseInt(horas) * 60 + parseInt(minutos))).toFixed(3);

        resultado.removeAttribute(`style`);
        resultado.textContent = `Olá, ${nome}! Você percorreu ${distancia} km em ${horas}h, ${minutos} min e ${segundos}s. Isso quer dizer que a sua velocidade média foi de ${velocidade} km/h, o que o corresponde a um pace de ${pace} min/km. Com ${peso}kg, você gastou cerca de ${caloria} cal por minuto.`;
    }else {
        resultado.removeAttribute(`style`);
        resultado.textContent = `Preencha todos os campos para calcular.`;
    }
}

calcular.addEventListener(`click`, CalcularCalorias);
