const { v4: uuidv4 } = require('uuid');


class Tarea {
    id = '';
    description = '';
    completadoEn = null;

    constructor(description) {
        this.id = uuidv4();
        this.description = description;
        this.completadoEn = null;
    }
}


module.exports = Tarea;