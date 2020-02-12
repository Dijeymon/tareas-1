// Tareas existentes
tareas = JSON.parse(localStorage.getItem('tareas')) || [];

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

// Cargar las tareas existentes
var ul = document.querySelector('.lista-tareas');
ul.innerHTML = '';
tareas.forEach(tarea => {
    var li = document.createElement('li');
    li.textContent = tarea.textoTarea;
    ul.append(li);
});
