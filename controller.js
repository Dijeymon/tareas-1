var Controller = function(modelo) {
    this.modelo = modelo;
    this.getTasks = function() {
        return modelo.tasks;
    }
}
