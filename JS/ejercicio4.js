function ejercicio4(sueldo) {
    let porcentajeAumento;

    if (sueldo < 1000) {
        porcentajeAumento = 0.15;
    } else {
        porcentajeAumento = 0.12;
    }

    const aumento = sueldo * porcentajeAumento;
    const nuevoSueldo = sueldo + aumento;


    const nuevoSueldoRedondeado = Math.round(nuevoSueldo * 100) / 100;

    return nuevoSueldoRedondeado;
}