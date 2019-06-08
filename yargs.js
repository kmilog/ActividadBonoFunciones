const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const muestraestudiante = {
    nombre
}

const argv = require('yargs')
            .command ('crear', 'Crear un estudiante', creacion)
            .command ('mostrar', 'Muestra el estudiante con sus notas')
            .command ('mostrarestudiante', 'Muestra estudiante por nombre',muestraestudiante)
            .command ('promedioEstudiante', 'Muestra el promedio por nombre',muestraestudiante)
            .argv;

module.exports = {
    argv
};