const colors = require('colors');
const { inquirerMenu } = require('./helpers/inquirer');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {
   
   let opt = '';

   do {
      
      opt = await inquirerMenu();

      if(opt !== '0') await pausa() 
   
   } while (opt !== '0');

}


main();