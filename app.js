const argv = require('./config/yargs').argv
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log("==============================================".blue);
        listarTabla(argv.base, argv.limite)        
        .then(tabla => console.log(`Tabla del ${argv.base} al ${argv.limite}\n${tabla}`))
        .catch((err) => {
            console.log(err);
        });
        
        break;

    case 'crear':
        
        crearArchivo(argv.base)
        .then(archivo => console.log(`Archivo creado ${archivo}`.blue))
        .catch(err => console.log(err));

        break;    

    default:
        console.log('comando no reconcido');
        break;
}





