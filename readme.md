# Patrones de diseño (MVC y Observer).
En este proyecto vamos a aplicar lo aprendido sobre patrones de diseño y object storage.

## MVC
Para aplicar MVC tenemos que analizar la funcionalidad actual de nuestras dos paginas y separar la lógica en sus respectivas secciones:
- Modelo: tenemos que crear un objeto que contenga toda la información que precisa el modelo:
    - tasks: Propiedad donde almacenar las tareas. Esta propiedad debería ser un array donde podamos almacenar nuestras tareas. Las tareas deben tener la siguiente estructura: ```
    {
        textoTarea: 'texto_tarea',
        id: 0,
        prioridad: 'baja,media o alta',
        habilitado: 'deshabilitado o deshabilitado'
    }```
    - addNewTask: Metodo para agregar una tarea nueva.
    - removeTask: Metodo para eliminar una tarea existente.
- Vista: tenemos que crear un objeto con todas las acciones que deben ejecutarse para que el usuario pueda visualizar, crear y eliminar tareas desde la vista:
    - renderList: Llama a el controlador para obtener mostrar las tareas en un listado.
    - renderCounters: Llama a el controlador para obtener mostrar los contadores con el numero de tareas agrupadas por prioridad.
    - addNewTask: cuando el usuario ingresa los datos y presiona el boton "Cargar nueva tarea" deberiamos tomar esa informacion y enviarsela al controlaadore.
    - removeTask: cuando el usuario presiona el boton "Quitar" en alguna tarea, deberiamos identificar esa tareas y removerla de el listado.
- Controlador: tenemos que crear un objeto con todas las acciones necesarias para:
    - getTasks: Metodo para obtener el listado de tasks de el modelo, formatear la informacion y pasarsela a la vista.
    - getCounters: Metodo para obtener el listado de tasks de el modelo, formatear la informacion y pasarsela a la vista.
    - addNewTask: Método que recibe y envía los datos que necesita el modelo para crear un nueva tarea.
    - removeTask: Método que recibe y envía los datos que necesita el modelo para eliminar un tarea.

## Object storage
Vamos a usar objectStorage para persistir los datos con los que estamos trabajando (tareas).
Para lograr esto, tenemos que identificar en que parte de nuestro código deberíamos traer y guardar la información.

## Observer
