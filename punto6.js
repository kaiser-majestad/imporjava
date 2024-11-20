//p6

let esElegibleParaPrestamo = (salario, puntajeCredito) => {
    return (salario > 30000 && puntajeCredito > 650) ? "Elegible para préstamo" : "No elegible para préstamo";

}

export { esElegibleParaPrestamo };
