var Controlador = function(modelo) {
  this.modelo = modelo;
}

Controlador.prototype = {
  agregarTarea: function(texto, radio) {
    this.modelo.agregarTarea(texto, radio);
  },
  cambiarEstadoTarea: function(id) {
    this.modelo.cambiarEstadoTarea(id);
  }
};