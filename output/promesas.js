"use strict";

//Bsicamente nos permite trabajar con Ajax
//Es una sentencia que nos permite esperar a que suceda algo y dependiendo de que si sucede o no, nosotros ejecutaremos un codigo.
// Dentro de la promesa tiene que ir una funcion, ademas, siempre lleva 2 parametros, resolve y reject, con estos parametros nosotros podremos ejecutar funciones
var promesa = new Promise(function (resolve, reject) {
  //Accion que queremos que se ejecute, ejemplo, muchas veces se utilizara ejecutando archivos ajax
  //Su ejecucion depende de la accion que este realizando, por ejemplo, cuando se trabaja con ajax se puede poner un condicional que pueda detectar cuando la conexion ajac fue exitosa o no
  //resolve();
  //reject();
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve('La operación tuvo éxito!');
    } else {
      reject();
    }
  }, 4000);
}); //Se ejecuta con resolve
//Tambien se puede invocar de esta forma el mensaje dentro de la funcion

promesa.then(function (mensaje) {
  alert(mensaje);
}); //Se ejecuta con reject

promesa["catch"](function () {
  alert('No exitoso');
});