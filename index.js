const { argv } = require('./yargs');
const funciones = require('./funciones');
let comando = argv._[0];

switch(comando){
    case 'crear':
        funciones.crear(argv);
        break;
    case 'mostrar':
        funciones.mostrar();
        break;
    case 'mostrarestudiante':
        funciones.mostrarestudiante(argv.nombre);
        break;
    case 'promedioEstudiante':
        funciones.promedioEstudiante(argv.nombre);
        break;
    case 'mayoresPromedios':
        funciones.mayoresPromedios();
        break;
    default :
    console.log('No ingreso una funcion existente');
}