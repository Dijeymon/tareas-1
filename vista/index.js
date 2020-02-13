var Vista = function (controlador) {
    this.generarListado = function (tareas) {
        var ul = document.querySelector('.lista-tareas');
        ul.innerHTML = '';
        tareas.forEach(tarea => {
            var li = document.createElement('li');
            li.textContent = tarea.textoTarea;
            ul.append(li);
        });
    };
    this.inicializar = function () {
        // Renderice el listado
        this.generarListado(controlador.obtenerListado());
        var contexto = this;

        // Agregue evento al form
        var form = document.getElementById('formulario-agregar');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var inputText = document.getElementById('descripcion').value;
            var radio = document.querySelector('input[name="prioridad"]:checked').value;
            controlador.agregarTarea(inputText, radio);
            contexto.generarListado(controlador.obtenerListado())
        })
    }
}
