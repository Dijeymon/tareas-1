// Tareas existentes
tareas = [
    {
        textoTarea: 'Mi primer tarea',
        id: 1,
        prioridad: 'baja',
        habilitado: 'deshabilitado'
    },
    {
        textoTarea: 'Mi segunnda tarea',
        id: 2,
        prioridad: 'media',
        habilitado: 'deshabilitado'
    },
    {
        textoTarea: 'Mi tercer tarea',
        id: 3,
        prioridad: 'alta',
        habilitado: 'deshabilitado'
    }
];

// Contadores de tareas
var contadores = [
    document.getElementById('contador_baja'),
    document.getElementById('contador_media'),
    document.getElementById('contador_alta')
];

// Cargar las tareas que estan en la variable "tareas"
var ul = document.querySelector('.lista-tareas');
ul.innerHTML = '';
tareas.forEach((tarea, i) => {
    var li = document.createElement('li');
    var remover = document.createElement('button');
    li.textContent = tarea.textoTarea;
    remover.textContent = "Quitar";
    remover.className = "tarea-quitar"
    remover.addEventListener('click', function () {
        removerTarea(i)
    })
    li.append(remover);
    ul.append(li);
});

// Actualizar contadores
contadores.forEach(contador => {
    var counter = 0;
    switch (contador.id) {
        case 'contador_baja':
            tareas.forEach(function (tarea) {
                if (tarea.prioridad === 'baja') counter++
            })
            break;
        case 'contador_media':
            tareas.forEach(function (tarea) {
                if (tarea.prioridad === 'media') counter++
            })
            break;
        case 'contador_alta':
            tareas.forEach(function (tarea) {
                if (tarea.prioridad === 'alta') counter++
            })
            break;
        default:
            console.log('La prioridad ' + tarea.prioridad + ' no esta contemplada.');
            break;
    }
    contador.textContent = counter;
});

// Logica de el formulario para agregar tareas
var form = document.getElementById('formulario-agregar');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var inputText = document.getElementById('descripcion').value;
    var radio = document.querySelector('input[name="prioridad"]:checked').value;
    agregarTarea(inputText, radio);
})

// Funcion para agregar tareas
function agregarTarea(texto, radio) {
    var nuevaTarea = {
        textoTarea: texto,
        id: tareas.length + 1,
        prioridad: radio,
        habilitado: 'habilitado'
    };
    tareas.push(nuevaTarea);

    // Acttualizamos el listado de tareas
    var ul = document.querySelector('.lista-tareas');
    ul.innerHTML = '';
    tareas.forEach((tarea, i) => {
        var li = document.createElement('li');
        var remover = document.createElement('button');
        li.textContent = tarea.textoTarea;
        remover.textContent = "Quitar";
        remover.className = "tarea-quitar"
        remover.addEventListener('click', function () {
            removerTarea(i)
        })
        li.append(remover);
        ul.append(li);
    });

    // Actualizamos los contadores
    contadores.forEach(contador => {
        var counter = 0;
        switch (contador.id) {
            case 'contador_baja':
                tareas.forEach(function (tarea) {
                    if (tarea.prioridad === 'baja') counter++
                })
                break;
            case 'contador_media':
                tareas.forEach(function (tarea) {
                    if (tarea.prioridad === 'media') counter++
                })
                break;
            case 'contador_alta':
                tareas.forEach(function (tarea) {
                    if (tarea.prioridad === 'alta') counter++
                })
                break;
            default:
                console.log('La prioridad ' + tarea.prioridad + ' no esta contemplada.');
                break;
        }
        contador.textContent = counter;
    });
};

function removerTarea(index) {
    tareas = tareas.filter((tarea, i) => i !== index)
    
    // Acttualizamos el listado de tareas
    var ul = document.querySelector('.lista-tareas');
    ul.innerHTML = '';
    tareas.forEach((tarea, i) => {
        var li = document.createElement('li');
        var remover = document.createElement('button');
        li.textContent = tarea.textoTarea;
        remover.textContent = "Quitar";
        remover.className = "tarea-quitar"
        remover.addEventListener('click', function () {
            removerTarea(i)
        })
        li.append(remover);
        ul.append(li);
    });

    // Actualizamos los contadores
    contadores.forEach(contador => {
        var counter = 0;
        switch (contador.id) {
            case 'contador_baja':
                tareas.forEach(function (tarea) {
                    if (tarea.prioridad === 'baja') counter++
                })
                break;
            case 'contador_media':
                tareas.forEach(function (tarea) {
                    if (tarea.prioridad === 'media') counter++
                })
                break;
            case 'contador_alta':
                tareas.forEach(function (tarea) {
                    if (tarea.prioridad === 'alta') counter++
                })
                break;
            default:
                console.log('La prioridad ' + tarea.prioridad + ' no esta contemplada.');
                break;
        }
        contador.textContent = counter;
    });
};