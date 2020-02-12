var VistaTareas = function(modelo, controlador) {
  this.modelo = modelo;
  this.controlador = controlador;
  this.tareas = this.modelo.tareas;
  var contexto = this;
  this.modelo.tareaAgregada.suscribir(function() {
    contexto.cargarTareas();
  });
  this.modelo.cambioEstado.suscribir(function() {
    contexto.cargarTareas();
  })
}

VistaTareas.prototype = {
  inicializar: function() {
    this.cargarTareas();
    this.cambiarEstadoTarea();
  },
  cargarTareas: function() {
    var ul = document.querySelector('.lista-tareas');
    ul.innerHTML = '';
    this.tareas.forEach(tarea => {
      if(tarea.habilitado !== 'deshabilitado') {
        var li = document.createElement('li');
        li.textContent = tarea.textoTarea;
        li.id = tarea.id;
        ul.append(li);
      }
    });
  },
  cambiarEstadoTarea: function() {
    var lista = document.querySelector('.lista-tareas');
    var contexto = this;
    lista.addEventListener('click', function() {
      console.log(event.target.nodeName);
      if (event.target.nodeName === 'LI') {
        var selected = event.target;
        selected.classList.add('disabled');
        console.log(selected);
        contexto.controlador.cambiarEstadoTarea(selected.id);
      }
    })
  }
};