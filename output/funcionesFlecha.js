"use strict";

var nombres = ['Diego', 'Roberto', 'Abraham', 'Nicolas'];
var numero_caracteres = nombres.map(function (nombre) {//console.log(nombre.length);
  //console.log(`${nombre} tiene ${nombre.length} letras.`);
}); //Función flecha
//(parametro) => {
//  return codigo que quiero ejecutar
//}
//Funcion flecha
//const num_caracteres = nombres.map((nombre) => {
//  return `${nombre} tiene ${nombre.length} letras.`;
//});
//Funcion flecha optimizada

var num_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras.");
});
console.log(num_caracteres);