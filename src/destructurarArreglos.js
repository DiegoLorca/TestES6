// const persona = ['Diego', 28, 'Chile', 'Ingeniero en Informatica'];
const persona = ['Diego', 28, undefined, 'Ingeniero en Informatica']; //tambien se pueden poner parametros por defecto

//Definimos que clase tendra [los elementos que quieres extraer del arreglo] = y el arreglo que queremos modificar
//***La destructuracion extrae cada uno de los valores y guardarlos en las variable que le asignamos***
const [nombre, , pais = 'No especificado', profesion] = persona; //se crea el nombre de las variables que necesitare y luego se indica a que arreglo pertenece
//Cuando no queremos extraer un valor se deja en blanco, es decir , , asi le decimos que este valor no lo asigna
//console.log(pais);
//Este codigo funciona, sin embargo, esta tomando el arreglo desde fuera y no desde el parametro
//***En esta funcion flecha, tambien extraemos cada uno de los valores y lo asignamos a una variable***
//const mostrarInfo = ([nombre, , pais] = nombre) => {
//  console.log(nombre, pais);
//}
//Para acortar la funcion flecha se puede hacer de la siguiente forma:
const mostrarInfo = ([nombre, , pais = 'No especificado', profesion = 'No especificado'] = nombre) => console.log(nombre, pais);
mostrarInfo(persona);
//La otra forma de hacerlo es:
//El problema de esta destructuracion es que hay un error en la funcion fleta
//mostrarInfo([nombre, pais]) => {
//  console.log(nombre, pais);
//}
//mostrarInfo(persona);
