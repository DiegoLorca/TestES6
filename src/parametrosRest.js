//Estos parametros nos permite pasar a una funcion un numero indefinido de elementos o de argumentos y nosotros poder recibirlo de una forma simple
//para evitar escribir todos los elementos que deberiamos recibir se debe colocar ...y nombre el cual los quiero recibir
//const mostrarDatos = (nombre, edad, correo) => {
const mostrarDatos = (...datos) => {
  //todos los datos se guardan dentro de un arreglo
  // console.log(nombre, edad, correo);
  //Con este arreglo se pueden ocupar todas las funciones y todos los datos se recibiran de esta forma
  console.log(datos);
}

mostrarDatos('Diego', 28, 'diego@gmail.com');
