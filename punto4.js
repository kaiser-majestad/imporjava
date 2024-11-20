//p4
let nivelRiesgo = (edad, enfermedadesPrevias) => {
    if (edad > 60 || enfermedadesPrevias) return "Alto riesgo";
    else if (edad >= 40 && edad <= 60 && enfermedadesPrevias) return "Riesgo moderado";
    else return "Bajo riesgo";
};

export {  nivelRiesgo };
