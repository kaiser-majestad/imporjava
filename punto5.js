//p5
let esBisiesto = (año) => {
    return (año % 400 == 0) ? "Es bisiesto" : 
           (año % 100 == 0) ? "No es bisiesto" : 
           (año % 4 == 0) ? "Es bisiesto" : "No es bisiesto";
};


export {  esBisiesto };
