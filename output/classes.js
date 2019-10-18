"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Una clase nos va a permitir organizar un poco nuestro codigo, para separar las variables y funciones que esten relacionadas
//Es recomendable escribir la primera letra de las clases con Mayuscula
var Usuario =
/*#__PURE__*/
function () {
  //Para asignar variables se necesita el metodo constructor
  //Este constructor es una funcion que se va a ejecutar cada vez que nosotros hacemos una instancia de usuario
  function Usuario(nombre, edad, correo) {
    _classCallCheck(this, Usuario);

    //Estas variables tambien se conocen como propiedades
    //Este Usuario . nombre o edad  =  valor asignado
    this.nombre = nombre, //Este dato es un dato fijo, es decir, si quiero agregar otro usuario con otro nombre, al consultar su nombre obtendra el mismo nombre asignado
    //this.edad = 28,
    this.edad = edad, this.correo = correo; //Lo recomendable es que al final lleve punto y coma ;
  } //Tambien pueden haber funciones dentro de una clase que tambien se les conoce como Metodo


  _createClass(Usuario, [{
    key: "mostrarSaludo",
    value: function mostrarSaludo() {
      return 'Hola<br />';
    } //Recepciona el argumento y lo muestra con el metodo

  }, {
    key: "mostrarMensaje",
    value: function mostrarMensaje(mensaje) {
      return mensaje;
    } //Para acceder a los parametros del constructor, se debe colocar los datos que requieras

  }, {
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n      <b>Nombre:</b> ".concat(this.nombre, " <br />\n      <b>Edad:</b> ").concat(this.edad, " <br />\n      <b>Correo:</b> ").concat(this.correo, " <br />\n      <hr>\n    ");
    }
  }]);

  return Usuario;
}(); //Indica que Diego sea un nuevo usuario y que tenga las mismas propiedades
//Esto es una nueva instancia de la clase Usuario


var diego = new Usuario('Diego', 28, 'diego@gmail.com'); //document.write(diego.correo);
//alert(diego.nombre);
//console.log(diego.edad);

var sebastian = new Usuario('Sebastian', 30, 'seba@gmail.com'); // document.write(sebastian.correo);
// alert(sebastian.nombre);
// console.log(sebastian.edad);

document.write(diego.mostrarSaludo()); //Tambien se le pueden pasar parametros a la funcion como argumento

document.write(diego.mostrarMensaje('Hola mundo <br />')); //Este metodo no requiere ningun argumento

document.write(diego.mostrarInfo());
document.write(sebastian.mostrarInfo()); //Lo importante es que estamos ahorrandonos codigo gracias a la clase
//Herencias, significa que la clase Estudiante hereda los mismos parametros que Usuario

var Estudiante =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Estudiante, _Usuario);

  //Si creamos un nuevo metodo constructor, tenemos que hacer el llamado de la otra clase-constructor para poder utilizar los mismos parametros
  function Estudiante(nombre, edad, correo, carrera) {
    var _this;

    _classCallCheck(this, Estudiante);

    //Super recibira las propiedades que teniamos anteriormente, ejecuta el constructor que teniamos antes
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Estudiante).call(this, nombre, edad, correo));
    _this.carrera = carrera;
    return _this;
  }

  _createClass(Estudiante, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n      <b>Nombre:</b> ".concat(this.nombre, " <br />\n      <b>Edad:</b> ").concat(this.edad, " <br />\n      <b>Correo:</b> ").concat(this.correo, " <br />\n      <b>Carrera:</b> ").concat(this.carrera, " <br />\n      <hr>\n    ");
    }
  }]);

  return Estudiante;
}(Usuario);

var ingrid = new Estudiante('Ingrid', 26, 'ingrid@gmail.com', 'Telecomunicaciones');
document.write(ingrid.mostrarInfo());