//const argv = require('yargs').argv;
//node app crear --descripcion "Pasear al perro"
// node app listar
// node app actualizar -d "Pasear al perro" - c true

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        console.log('Crear por hacer');
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=====Por Hacer=====\n'.green);
            console.log(tarea.descripcion);
            console.log('Estado:' + tarea.completado + '\n');
            console.log('==================='.green)
        }
        console.log('Mostrar todas las tareas');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        console.log('Actualiza una tarea por hacer');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    default:
        console.log('Comando no es reconocido');
}