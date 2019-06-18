const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla', { 
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .command('crear', 'Crea .txt con la tabla solicitada', {
                    base: {
                        demand:true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .argv


                module.exports = {
                    argv
                }