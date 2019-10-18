"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// const persona = ['Diego', 28, 'Chile', 'Ingeniero en Informatica'];
var persona = ['Diego', 28, undefined, 'Ingeniero en Informatica']; //tambien se pueden poner parametros por defecto
//Definimos que clase tendra [los elementos que quieres extraer del arreglo] = y el arreglo que queremos modificar
//***La destructuracion extrae cada uno de los valores y guardarlos en las variable que le asignamos***

var nombre = persona[0],
    _persona$ = persona[2],
    pais = _persona$ === void 0 ? 'No especificado' : _persona$,
    profesion = persona[3]; //se crea el nombre de las variables que necesitare y luego se indica a que arreglo pertenece
//Cuando no queremos extraer un valor se deja en blanco, es decir , , asi le decimos que este valor no lo asigna
//console.log(pais);
//Este codigo funciona, sin embargo, esta tomando el arreglo desde fuera y no desde el parametro
//***En esta funcion flecha, tambien extraemos cada uno de los valores y lo asignamos a una variable***
//const mostrarInfo = ([nombre, , pais] = nombre) => {
//  console.log(nombre, pais);
//}
//Para acortar la funcion flecha se puede hacer de la siguiente forma:

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : nombre,
      _ref2 = _slicedToArray(_ref, 4),
      nombre = _ref2[0],
      _ref2$ = _ref2[2],
      pais = _ref2$ === void 0 ? 'No especificado' : _ref2$,
      _ref2$2 = _ref2[3],
      profesion = _ref2$2 === void 0 ? 'No especificado' : _ref2$2;

  return console.log(nombre, pais);
};

mostrarInfo(persona); //La otra forma de hacerlo es:
//El problema de esta destructuracion es que hay un error en la funcion fleta
//mostrarInfo([nombre, pais]) => {
//  console.log(nombre, pais);
//}
//mostrarInfo(persona);