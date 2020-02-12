var Modelo = function() {
  this.tareas = [
    {
      textoTarea: 'Mi primer tarea',
      id: 1,
      prioridad: 'media',
      habilitado: 'habilitado'
    },
    {
      textoTarea: 'Mi segunnda tarea',
      id: 2,
      prioridad: 'baja',
      habilitado: 'habilitado'
    },
    {
      textoTarea: 'Mi tercer tarea',
      id: 3,
      prioridad: 'alta',
      habilitado: 'habilitado'
    }
  ];
  console.log(this.tareas);
  this.tareaAgregada = new Evento(this);
  this.cambioEstado = new Evento(this);
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
  },
  cambiarEstadoTarea: function(id) {
    var tareas = this.tareas;

    tareas = tareas.map(function(tarea) {
      if (tarea.id == id ) {
        tarea.habilitado = 'deshabilitado';
      }
    });
    this.tareas = tareas;
    var contexto = this;
    setTimeout(function() {
      contexto.cambioEstado.notificar();
    }, 2000);
  }
};