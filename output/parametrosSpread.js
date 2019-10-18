"use strict";

//Es al reves de los parametrosRest, es decir, nosotros pasamos los datos con esta estructura
//...parametros rest recibe todos los argumentos
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
}; //En vez que los datos vayan dentro de la invocacion, se crea un arreglo y se insertan todos los elementos


var arregloDatos = ['Diego', 28, 'diego@gmail.com', 'Chile']; //Se pueden pasar todos los elementos como elementos de argumento
//parametros spread podemos enviar los datos de un arreglo

mostrarDatos.apply(void 0, arregloDatos);