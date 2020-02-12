// Tareas existentes
tareas = [
    {
        textoTarea: 'Mi primer tarea',
        id: 1,
        prioridad: 'media',
        habilitado: 'deshabilitado'
    },
    {
        textoTarea: 'Mi segunnda tarea',
        id: 2,
        prioridad: 'baja',
        habilitado: 'deshabilitado'
    },
    {
        textoTarea: 'Mi tercer tarea',
        id: 3,
        prioridad: 'alta',
        habilitado: 'deshabilitado'
    }
];

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

// Cargar las tareas existentes
var ul = document.querySelector('.lista-tareas');
ul.innerHTML = '';
tareas.forEach(tarea => {
    var li = document.createElement('li');
    li.textContent = tarea.textoTarea;
    ul.append(li);
});
