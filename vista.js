var Vista = function (controller) {
    this.controller = controller;
    this.renderList = function () {
        var ul = document.querySelector('.lista-tareas');
        var tareas = controller.getTasks();
        ul.innerHTML = '';
        tareas.forEach((tarea, i) => {
            var li = document.createElement('li');
            var remover = document.createElement('button');
            li.textContent = tarea.textoTarea;
            remover.textContent = "Quitar";
            remover.className = "tarea-quitar"
            remover.addEventListener('click', function () {
                // TODO: removerTarea(i) 
            })
            li.append(remover);
            ul.append(li);
        });
    }
    this.renderCounters = function() {
        var contadores = [
            document.getElementById('contador_baja'),
            document.getElementById('contador_media'),
            document.getElementById('contador_alta')
        ];
    };
    this.inicializar = function() {
        this.renderList();
    }
}