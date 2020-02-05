// en el archivo index vamos a inicializar nuesto modelo, y las vistas.
var modelo = new Modelo();
var controlador = new Controlador(modelo);

var vistaTareas = new VistaTareas(modelo, controlador);
vistaTareas.inicializar();

var vistaNuevasTareas = new  VistaNuevasTareas(modelo, controlador);
vistaNuevasTareas.inicializar();
