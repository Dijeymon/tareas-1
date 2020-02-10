var Modelo = function() {
  this.tareas = [
    {
      textoTarea: 'Mi primer tarea',
      id: 1,
      prioridad: 'media',
      habilitado: 'deshabilitado'
    },
    {
      textoTarea: 'Mi segunnda tarea',
      id: 2,
      prioridad: 'baja',
      habilitado: 'deshabilitado'
    },
    {
      textoTarea: 'Mi tercer tarea',
      id: 3,
      prioridad: 'alta',
      habilitado: 'deshabilitado'
    }
  ];
  console.log(this.tareas);
  this.tareaAgregada = new Evento(this);
}

Modelo.prototype = {
  agregarTarea: function(texto, radio) {
    var nuevaTarea = {
      textoTarea: texto,
      id: 4,
      prioridad: radio,
      habilitado: 'habilitado'
    };
    this.tareas.push(nuevaTarea);
    this.tareaAgregada.notificar();
  }
}