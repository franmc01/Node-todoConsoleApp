const inquirer = require('inquirer');
const colors = require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1.- Crear una tarea'
            },
            {
                value: '2',
                name: '2.- Listar todas mis tareas'
            },
            {
                value: '3',
                name: '3.- Listar mis tareas completadas'
            },
            {
                value: '4',
                name: '4.- Listar mis tareas pendientes'
            },
            {
                value: '5',
                name: '5.- Completar tarea(s)'
            },
            {
                value: '6',
                name: '6.- Borrar tarea'
            },
            {
                value: '0',
                name: '0.- Salir'
            }
        ]
    }
]


const inquirerMenu = async () => {
    console.clear();
    console.log('======================='.cyan);
    console.log(' Seleccione una opción '.cyan)
    console.log('=======================\n'.cyan);

    const { opcion } = await inquirer.prompt(menuOpts)
    return opcion;
}

const pauseMenu = async () => {
    question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}


module.exports = {
    inquirerMenu,
    pauseMenu,
    leerInput
}