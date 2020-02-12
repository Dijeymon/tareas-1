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

// Cargar las tareas que estan en la variable "tareas"
var ul = document.querySelector('.lista-tareas');
ul.innerHTML = '';
tareas.forEach(tarea => {
    var li = document.createElement('li');
    li.textContent = tarea.textoTarea;
    ul.append(li);
});

// Logica de el formulario para agregar tareas
var form = document.getElementById('formulario-agregar');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var inputText = document.getElementById('descripcion').value;
    var radio = document.querySelector('input[name="prioridad"]:checked').value;
    agregarTarea(inputText, radio);
    var ul = document.querySelector('.lista-tareas');
    ul.innerHTML = '';
    tareas.forEach(tarea => {
        var li = document.createElement('li');
        li.textContent = tarea.textoTarea;
        ul.append(li);
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