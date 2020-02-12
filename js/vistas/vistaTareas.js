var VistaTareas = function(modelo, controlador) {
  this.modelo = modelo;
  this.controlador = controlador;
  this.tareas = this.modelo.tareas;
  var contexto = this;
  this.modelo.tareaAgregada.suscribir(function() {
    contexto.cargarTareas();
  });
}

VistaTareas.prototype = {
  inicializar: function() {
    this.cargarTareas();
  },
  cargarTareas: function() {
    var ul = document.querySelector('.lista-tareas');
    ul.innerHTML = '';
    this.tareas.forEach(tarea => {
      var li = document.createElement('li');
      li.textContent = tarea.textoTarea;
      ul.append(li);
    });
  },
};