var Modelo = function() {
    this.tasks = [
        {
            textoTarea: 'Mi primer tarea',
            id: 1,
            prioridad: 'baja',
            habilitado: 'deshabilitado'
        },
        {
            textoTarea: 'Mi segunnda tarea',
            id: 2,
            prioridad: 'media',
            habilitado: 'deshabilitado'
        },
        {
            textoTarea: 'Mi tercer tarea',
            id: 3,
            prioridad: 'alta',
            habilitado: 'deshabilitado'
        }
    ];
    this.addNewTask = function(texto, radio) { 
        var newTask = {
            textoTarea: texto,
            id: this.tasks.length + 1,
            prioridad: radio,
            habilitado: 'habilitado'
        };
        this.tasks.push(newTask);
    };
    this.removeTask = function(index) {
        this.tasks = this.tasks.filter((tarea, i) => i !== index)
    };
}