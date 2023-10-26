function ejercico1(radio, altura) {

    diametro = radio * 2
    area = diametro * Math.PI;
    volumen = area * altura;

    return [area.toFixed(2), volumen.toFixed(2)]
}