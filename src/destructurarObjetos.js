const usuario = {
  nombre: 'Diego',
  edad: 28,
  correo: 'correo@correo.com',
  pais: 'Chile',
  //profesion: 'Ingeniero en Informatica'
}
//Es similar a la destructuracion de Arreglos
//Tambien se puede colocar paramentros por Defecto
const {nombre, edad = 'No especificado', profesion} = usuario;
//La diferencia con la destructuracion de arreglos es que podemos extraer directamente los parametros, anteriormente teniamos que poner , ,
//console.log(edad);

//Las funciones son similares a las que salian en la destructuracion de arreglo
//Tambien se puede asignar un parametro por Defecto
//const mostrarInfo = ({nombre, edad, profesion = 'estudiante'}) => {
//  console.log(`${nombre} tiene ${edad} y es ${profesion}`);
//}
//Para limpiar un poco mas el codigo
const mostrarInfo = ({nombre, edad, profesion = 'estudiante'}) => console.log(`${nombre} tiene ${edad} y es ${profesion}`);

mostrarInfo(usuario);
