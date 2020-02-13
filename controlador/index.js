var Controlador = function (modelo) {
    this.agregarTarea = function(texto, radio) {
        modelo.agregarTarea(texto, radio);
    };
    this.obtenerListado = function() {
        return modelo.tareas;
    }
    this.removerTarea = function() {};
}