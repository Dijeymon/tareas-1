var Tarea = function (textoTarea, id, prioridad, habilitado) {
    this.textoTarea = textoTarea;
    this.id = id;
    this.prioridad = prioridad;
    this.habilitado = habilitado;
}

var Modelo = function () {
    this.tareas = [
        new Tarea('Mi primer tarea', 1, 'media', 'habilitado'),
        new Tarea('Mi segunnda tarea', 2, 'baja', 'habilitado'),
        new Tarea('Mi tercer tarea', 3, 'alta', 'habilitado')
    ];
    this.agregarTarea = function(texto, radio) {
        var nuevaTarea = new Tarea(texto, this.tareas.length + 1, radio, 'habilitado')
        this.tareas.push(nuevaTarea);
    };
}
