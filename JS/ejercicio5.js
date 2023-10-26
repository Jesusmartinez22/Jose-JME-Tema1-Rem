function ejercicio5(articulo) {
    let precio_final;
    if (articulo <= 20) {
        precio_final = articulo;
        return precio_final.toFixed(2);
    }
    if (articulo > 20 && articulo <= 40) {
        precio_final = articulo + (((articulo - 20) * 30) / 100);
        return precio_final.toFixed(2);
    }
    if (articulo > 40 && articulo <= 500) {
        precio_final = articulo + (20 * 0.3) + ((articulo - 40) * 0.4);
        return precio_final.toFixed(2);
    }
    if (articulo > 500) {
        precio_final = articulo + (20 * 0.3) + ((articulo - 40) * 0.5);
        return precio_final.toFixed(2);
    }

}