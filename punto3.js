
//p3
let categoriaIMC = (imc) => {
    if (imc < 18.5) return "Bajo peso";
    else if (imc < 25) return "Normal";
    else if (imc < 30) return "Sobrepeso";
    else return "obesidad";
};



export {  categoriaIMC,  };
