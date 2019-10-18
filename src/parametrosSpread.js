//Es al reves de los parametrosRest, es decir, nosotros pasamos los datos con esta estructura
//...parametros rest recibe todos los argumentos
const mostrarDatos = (...datos) => {
  console.log(datos);
}
//En vez que los datos vayan dentro de la invocacion, se crea un arreglo y se insertan todos los elementos
const arregloDatos = ['Diego', 28, 'diego@gmail.com', 'Chile'];
//Se pueden pasar todos los elementos como elementos de argumento
//parametros spread podemos enviar los datos de un arreglo
mostrarDatos(...arregloDatos);
