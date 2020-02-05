# Patrones de diseño.
## Etapa 3

### Almacenando los datos localmente

Utilizaremos el objeto JSON, con sus métodos .parse() y .stringify() para guardar o recuperar los datos de nuestras tareas. De este modo persistiremos nuestra información hasta que el usuario borre la el localStorage.

Estos métodos los deberemos usar en combinación con localStorage.setItem() y localStorage.getItem();

### Guardando los datos.
Para guardar los datos debemos utilizar debemos utilizar localStorage.setItem();

- El modelo tiene como una de sus propiedades tareas, estas tareas actualmente son una array, y están previamente definidas. Nuestras tareas deberían ser lo que este guardado en el localStorage. Se podría utilizar localStorage.getItem(); y JSON.parse(); para poder trabajar en el resto de la aplicación. 

- El modelo deberá tener un método guardar, que guarde nuestras tareas. Para poder guardarlas recordemos que el local storage sólo acepta cadenas de texto, por lo que tendrémos que convertir nuestra array a texto, utilizando el método JSON.stringify();
