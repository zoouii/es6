import yargs from 'yargs';

const args = yargs

    .option('prod',{
        boolean: true,
        default: false,
        describe: 'min all jsfiles'
    })

    .option('watch',{
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    .option('verbose',{
        boolean: true,
        default: false,
        describe: 'all logs'
    })

    .option('sourcemaps',{
        describe: 'force to create sourcemaps'
    })

    .option('port',{
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv

    export default args