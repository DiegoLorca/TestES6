"use strict";

//Es una forma para crear objetos
var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    //Con ES6 no es necesario crearlo y copiarlo
    //nombre: nombre,
    nombre: nombre,
    edad: edad,
    //Tambien, para crear un metodo se puede realizar de la siguiente forma:
    mostrarInfo: function mostrarInfo() {
      return "".concat(nombre, " tiene ").concat(edad);
    }
  };
}; //Realiza el llamado al objeto (dentro de el se colocan los parametros que quieres asignar) . luego, para mostrar el metodo se invoca de la siguiente forma:


console.log(crearObjeto('Diego', 28).mostrarInfo());