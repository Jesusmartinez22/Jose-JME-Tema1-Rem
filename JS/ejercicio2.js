function ejercicio2(segundos) {
    minutos = Math.trunc(segundos / 60)
    segundos = 60 * ((segundos / 60) - minutos)
    hora = Math.trunc(minutos / 60)
    minutos1 = 60 * ((minutos / 60) - hora)
    hora2 = Math.trunc(hora / 60)
    minutos2 = 60 * ((hora / 60) - hora2)
    return [minutos2.toFixed(), minutos1.toFixed(), segundos.toFixed()]

}