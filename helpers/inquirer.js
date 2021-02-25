const inquirer = require('inquirer');
const colors = require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [ 'opt1','opt2', 'opt3' ]
    }
]


const inquirerMenu = async() => {
    console.clear();
    console.log('======================='.cyan);
    console.log(' Seleccione una opción '.cyan)
    console.log('=======================\n'.cyan);

    const opts = await inquirer.prompt(menuOpts)
    return opts;
}


module.exports = {
    inquirerMenu
}