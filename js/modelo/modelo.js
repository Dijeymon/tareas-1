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
}