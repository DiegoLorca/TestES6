"use strict";

//Cadena de texto
var texto = 'Hola Mundo'; //startsWith es un metodo que nos permite saber si un texto empieza con tal letra. True/False
//toLowerCase modifica el texto seleccionado a minuscula

console.log(texto, 'empieza con h: ', texto.toLowerCase().startsWith('h')); //Tambien existe endsWith que nos permite saber si un texto termina con tal letra

console.log(texto, 'termina con o: ', texto.toLowerCase().endsWith('o')); //Tambien se puede revisar si una cadena de texto incluye una palabra

console.log(texto, 'incluye la palabra Diego: ', texto.includes('Mundo')); //Cadena de arreglo

var amigos = ['Palomo', 'Chuli', 'Camilo', 'Edwards', 'Renato']; //El metodo includes se utiliza tanto en cadenas de texto como en cadenas de arreglo

console.log(amigos.includes('Chuli')); //Se puede buscar buscando el nombre de amigos que sea mayor a 6 letras o el que sea igual al nombre que estan buscando

console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
}));
console.log(amigos.find(function (amigo) {
  return amigo === 'Renato';
})); //Tambien se puede buscar por nombre y como resultado, obtenga el index
//Si el resultado arroja -1 significa que la palabra que estas buscando no se encuentra dentro de tu arreglo.

console.log(amigos.findIndex(function (amigo) {
  return amigo === 'Diego';
}));