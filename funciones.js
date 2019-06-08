const fs = require('fs');

listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre : estudiante.nombre,
        matematicas : estudiante.matematicas,
        ingles : estudiante.ingles,
        programacion : estudiante.programacion
    };
    let duplicado = listaEstudiantes.find(x => x.nombre == estudiante.nombre);
    if(!duplicado){
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }else{
        console.log('Ya existe otro estudiante con ese nombre');
    }
}

const listar = () => {
    try{
        listaEstudiantes = require('./listado.json');
    }catch(error){
        listaEstudiantes = [];
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err) => {
        if(err) throw (err);
        console.log('Archivo creado con éxito');
    })
}

const mostrarestudiante = (nom) => {
    listar();
    let est = listaEstudiantes.find(x => x.nombre == nom);
    if(est){
        console.log(est.nombre);
        console.log('notas ');
        console.log('matematicas: ' + est.matematicas);
        console.log('ingles: ' + est.ingles);
        console.log('programación: ' + est.programacion);
    }else{
        console.log('El nomre del estudiante no se encuentra en la base de datos');
    }
}

const mostrar = () => {
    listar();
    console.log('Notas de los estudiantes');
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('notas ');
        console.log('matematicas: ' + estudiante.matematicas);
        console.log('ingles: ' + estudiante.ingles);
        console.log('programación: ' + estudiante.programacion);
    });
}

const promedioEstudiante = (nom) => {
    listar();
    let est = listaEstudiantes.find(x => x.nombre == nom);
    if(est){
        console.log('el promedio del estudiante es: ' + promedio(est) );
    }else{
        console.log('El estudiante no se encuentra en la base de datos');
    }
}

const mayoresPromedios = () => {
    listar();
    var mayores = [];
    listaEstudiantes.forEach(element =>{
        element.promedio = promedio(element);
        if(element.promedio > 3){ 
            mayores.push(element);
        }
    });
    mayores.forEach(element => {
        console.log('Nombre: ' + element.nombre);
        console.log('Promedio: ' + element.promedio);
    })  
}

const promedio = (data) => {
    if(data){
        return ((data.matematicas + data.ingles + data.programacion)/3);
    }else{
        return -1;
    }
}

module.exports = {
    crear,
    mostrar,
    mostrarestudiante,
    promedioEstudiante,
    mayoresPromedios
}