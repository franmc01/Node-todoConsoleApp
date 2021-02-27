const colors = require('colors');
const { inquirerMenu, pauseMenu, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas.model');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {
   
   let opt = '';

   const tareas = new Tareas();

   do {
      opt = await inquirerMenu();

      switch (opt) {
         case '1':
            const desc = await leerInput('Descripción: ');
            console.log(desc);
            tareas.crearTarea(desc);
            break;
      
         case '2':
            console.log(tareas._listado);
            break;
      
         default:
            break;
      }

      if(opt !== '0') await pauseMenu();
   
   } while (opt !== '0');

}


main();