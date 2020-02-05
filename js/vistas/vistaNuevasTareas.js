var VistaNuevasTareas = function(modelo, controlador) {
  this.modelo = modelo;
  this.controlador = controlador;
};

VistaNuevasTareas.prototype = {
  inicializar: function() {
    console.log('iniciada nuevas tareas');
  }
}
