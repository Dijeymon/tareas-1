# Patrones de diseño (MVC y Observer).
En este proyecto vamos a aplicar lo aprendido sobre patrones de diseño y object storage.

## MVC
Para aplicar MVC tenemos que analizar la funcionalidad actual de nuestras dos paginas y separar la logica en sus respectivas secciones:
- Modelo: tenemos que crear un objeto que contenga toda la informacion que precisa el modelo:
    - Propiedad donde almacenar las tareas (tasks): Esta propiedad deberia ser un array donde podamos alcenar nuestras tareas. Las tareas deben tener la siguiente estructura: ```
    {
        textoTarea: 'texto_tarea',
        id: 0,
        prioridad: 'baja,media o alta',
        habilitado: 'deshabilitado o deshabilitado'
    }```
    - Metodo para Agregar una tarea nueva (addNewTask):
    - Metodo para Eliminar una tarea existente (removeTask):
- Vista: tenemos que crear un objeto con todas las acciones que deben ejecutarse para que el usuario pueda visualizar las tareas, conhacer desde la vista:
    - Renderizar listado: tomar la informacion de el controlador para mostrar las tareas en un listado.
    - Renderizar Contadores: tomar la informacion de el controlador para mostrar los contadores con el numero de tareas agrupadas por prioridad.
    - Agregar tarea: cuando el usuario ingresa los datos y presiona el boton "Cargar nueva tarea" deberiamos tomar esa informacion y enviarsela al controlaadore.
    - Eliminar tarea: cuando el usuario presiona el boton "Quitar" en alguna tarea, deberiamos identificar esa tareas y removerla de el listado.
- Conotrolador: tenemos que crear un objeto con todas las acciones necesarias para :

## Object storage
Vamos a usar object storage para persistir los datos con los que estamos trabajando (tareas).
Para loograr esto, tenemos que usa 

## Observer
