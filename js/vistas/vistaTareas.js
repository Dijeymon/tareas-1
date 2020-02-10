var VistaTareas = function(modelo, controlador) {
  this.modelo = modelo;
  this.controlador = controlador;
  this.tareas = this.modelo.tareas;
  var contexto = this;
  console.log('desde vista', this.tareas);
  console.log(this.modelo);
  this.modelo.tareaAgregada.suscribir(function() {
    contexto.cargarTareas();
  });
}

VistaTareas.prototype = {
  inicializar: function() {
    console.log('iniciada tareas');
    this.cargarTareas();
  },
  cargarTareas: function() {
    var ul = document.querySelector('.lista-tareas');
    this.tareas.forEach(tarea => {
      var li = document.createElement('li');
      li.textContent = tarea.textoTarea;
      ul.append(li);
      console.log(ul);
    });
  },
};