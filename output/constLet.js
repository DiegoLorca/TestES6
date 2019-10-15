"use strict";

var nombre = 'Diego'; //let es el sustituto de la palabra var en js
//Caracteristica Nº1
//Con var se puede redeclarar una variable
//Esto puede causar problemas en donde re-declaremos sin darnos cuenta.

var apellido = 'Lorca'; //var apellido = 'Chacón';

var pais = 'Chile'; //let pais = 'España'; //Se genera un error en la consola, el cual indica que existe un TipeError y la linea de codigo erronea.

var pais1 = 'Argentina'; //const pais1 = 'Brasil'; //Con const pasa lo mismo
//Esto es bueno, porque nos evitamos de hacer el mismo problema
//console.log('Hola ' + pais);
//Caracteristica Nº2
//let y const tambien tienen un scope en el que no podemos acceder a las variables creadas dentro de una funcion.

function saludo() {
  var nom = 'Mundo';
  return 'Hola ' + nom;
} //console.log(saludo()); //El scope de js es que cuando una variable esta dentro de una funcion, no puede ser llamado desde a fuera
//console.log(nom);
//Caracteristica Nº3
//let y const tienen un scope de tipo bloque


var edad = 18;

if (edad >= 18) {
  var esAdulto = true;
} //console.log(esAdulto); //Con var se puede ocupar la variable dentro de un bloque


var edad1 = 18;

if (edad1 >= 18) {
  var esMayor = true; //Con let o const todas las variables dentro de un bloque estaran protegidas y no se podran utilizar fuera de ella.
  //console.log(esMayor);
} //Todo lo que este dentro de llave es un bloque
//console.log(esMayor);


var nombre1 = 'Diego'; //Con let se puede sobreescribir el valor

nombre1 = 'Sebastian';
var apellido1 = 'Lorca'; //const (constante) es un valor que nunca va a cambiar, es por eso que arrojara Error
//apellido1 = 'Chacon'; //const lo usamos cuando queremos que el valor de una variable nunca cambie.
//console.log(nombre1 + " " + apellido1);

var colores = ['Rojo', 'Azul']; //Regularmente se ocupa const, puesto que lo ideal es no cambiar un valor pre definido a una variable.
//colores = 'jakjskas'; //Colores no permitira agregar una cadena de texto.

colores.push('Blanco'); //push nos permitira agregar valores dentro de un arreglo.

console.log(colores);