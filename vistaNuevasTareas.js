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

// Cargar las tareas que estan en la variable "tareas"
var ul = document.querySelector('.lista-tareas');
ul.innerHTML = '';
tareas.forEach(tarea => {
    var li = document.createElement('li');
    li.textContent = tarea.textoTarea;
    ul.append(li);
});

// Contadores de tareas
var contadores = [
    document.getElementById('contador_baja'),
    document.getElementById('contador_media'),
    document.getElementById('contador_alta')
];

// Actualizar contadores
contadores.forEach(contador => {
    var counter = 0;
    switch (contador.id) {
        case 'contador_baja':
            tareas.forEach(function(tarea) {
                if (tarea.prioridad === 'baja') counter++
            })
            break;
        case 'contador_media':
            tareas.forEach(function(tarea) {
                if (tarea.prioridad === 'media') counter++
            })
            break;
        case 'contador_alta':
            tareas.forEach(function(tarea) {
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
    
    // Acttualizamos el listado de tareas
    var ul = document.querySelector('.lista-tareas');
    ul.innerHTML = '';
    tareas.forEach(tarea => {
        var li = document.createElement('li');
        li.textContent = tarea.textoTarea;
        ul.append(li);
    });

    // Actualizamos los contadores
    contadores.forEach(contador => {
        var counter = 0;
        switch (contador.id) {
            case 'contador_baja':
                tareas.forEach(function(tarea) {
                    if (tarea.prioridad === 'baja') counter++
                })
                break;
            case 'contador_media':
                tareas.forEach(function(tarea) {
                    if (tarea.prioridad === 'media') counter++
                })
                break;
            case 'contador_alta':
                tareas.forEach(function(tarea) {
                    if (tarea.prioridad === 'alta') counter++
                })
                break;
            default:
                console.log('La prioridad ' + tarea.prioridad + ' no esta contemplada.');
                break;
        }
        contador.textContent = counter;
    });
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
};