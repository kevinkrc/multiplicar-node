const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('Listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('Crear', 'Crea un archivo nuevo', opt)
    .help()
    .argv;

module.exports = {
    argv
}