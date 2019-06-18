
const argv = require('./config/yarg').argv;




const {crearArchivo, listar} = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);

        break;
    case 'crear':
            crearArchivo(argv.base, argv.limite).then((data)=> console.log(data) ).catch(err => console.log(err))
        console.log(comando);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

console.log(argv);


// 