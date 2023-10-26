function ejercicio3(lados) {
    const [L1, L2, L3] = lados;

    const s = (L1 + L2 + L3) / 2;
    const area = Math.sqrt(s * (s - L1) * (s - L2) * (s - L3));

    const areaRedondeada = Math.round(area * 100) / 100;
    return areaRedondeada;
}