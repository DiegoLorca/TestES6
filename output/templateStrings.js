"use strict";

var nombre = 'Diego';
var edad = 28;
var pais = 'Chile';
console.log('La persona es ' + nombre + ' tiene ' + edad + ' y es de ' + pais);
console.log("La persona es ".concat(nombre, ", tiene ").concat(edad, " y es de ").concat(pais)); //Ticklasher es el acento invertido, al lado del boton P
//ES6 se puede concatenar las variables, utilizando los acentos graves (`) y dentro de estos, colocar ${variable}