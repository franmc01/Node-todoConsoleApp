
require('colors');

const mostrarMenu = () => {
    console.clear();
    console.log('======================='.cyan);
    console.log(' Seleccione una opción '.cyan)
    console.log('=======================\n'.cyan);

    console.log(`${'1.-'.cyan} Crear una tarea`);
    console.log(`${'2.-'.cyan} Listar mis tareas`);
    console.log(`${'3.-'.cyan} Listar mis tareas completadas`);
    console.log(`${'4.-'.cyan} Listar mis tareas pendientes`);
    console.log(`${'5.-'.cyan} Completar tarea(s)`);
    console.log(`${'6.-'.cyan} Borrar tarea`);
    console.log(`${'0.-'.cyan} Salir\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question('Seleccione una opcion: ', (opt)=>{
        console.log(opt);
        readline.close();
    });
}


const pausa = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question(`\nPresione la tecla ${'Enter'.cyan}  para continuar : \n`, (opt)=>{
        readline.close();
    });
}

module.exports = {
    mostrarMenu,
    pausa
}