var VistaNuevasTareas = function(modelo, controlador) {
  this.modelo = modelo;
  this.controlador = controlador;
  var contexto = this;
  this.modelo.tareaAgregada.suscribir(function() {
    contexto.cargarTarea();
  });
};

VistaNuevasTareas.prototype = {
  inicializar: function() {
    console.log('iniciada nuevas tareas');
    this.cargarTarea();
  },
  cargarTarea: function() {
    var form = document.getElementById('formulario-agregar');
    var contexto = this;
    form.addEventListener('submit', function() {
      event.preventDefault();
      console.log(event);
      var inputText = document.getElementById('descripcion').value;
      console.log(inputText);
      var radio = document.querySelector('input[name="prioridad"]:checked').value;
      console.log(radio);
      contexto.controlador.agregarTarea(inputText, radio);
    })
  }
}
