//p2
let calcularDescuento = (precio) => {
    let descuento = 0;
    if (precio > 1000) {
        descuento = 0.2;
    } else if (precio >= 500) {
        descuento = 0.1;
    }
    return precio - (precio * descuento);
};

export { calcularDescuento };
