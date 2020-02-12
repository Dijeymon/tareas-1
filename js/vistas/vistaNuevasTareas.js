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
    this.cargarTarea();
  },
  cargarTarea: function() {
    var form = document.getElementById('formulario-agregar');
    var contexto = this;
    form.addEventListener('submit', function() {
      event.preventDefault();
      var inputText = document.getElementById('descripcion').value;
      var radio = document.querySelector('input[name="prioridad"]:checked').value;
      contexto.controlador.agregarTarea(inputText, radio);
    })
  }
}
