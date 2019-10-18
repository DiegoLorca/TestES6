"use strict";

var usuario = {
  nombre: 'Diego',
  edad: 28,
  correo: 'correo@correo.com',
  pais: 'Chile' //profesion: 'Ingeniero en Informatica'

}; //Es similar a la destructuracion de Arreglos
//Tambien se puede colocar paramentros por Defecto

var nombre = usuario.nombre,
    _usuario$edad = usuario.edad,
    edad = _usuario$edad === void 0 ? 'No especificado' : _usuario$edad,
    profesion = usuario.profesion; //La diferencia con la destructuracion de arreglos es que podemos extraer directamente los parametros, anteriormente teniamos que poner , ,
//console.log(edad);
//Las funciones son similares a las que salian en la destructuracion de arreglo
//Tambien se puede asignar un parametro por Defecto
//const mostrarInfo = ({nombre, edad, profesion = 'estudiante'}) => {
//  console.log(`${nombre} tiene ${edad} y es ${profesion}`);
//}
//Para limpiar un poco mas el codigo

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      edad = _ref.edad,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? 'estudiante' : _ref$profesion;
  return console.log("".concat(nombre, " tiene ").concat(edad, " y es ").concat(profesion));
};

mostrarInfo(usuario);