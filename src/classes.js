//Una clase nos va a permitir organizar un poco nuestro codigo, para separar las variables y funciones que esten relacionadas
//Es recomendable escribir la primera letra de las clases con Mayuscula
class Usuario {
  //Para asignar variables se necesita el metodo constructor
  //Este constructor es una funcion que se va a ejecutar cada vez que nosotros hacemos una instancia de usuario
  constructor(nombre, edad, correo){
    //Estas variables tambien se conocen como propiedades
    //Este Usuario . nombre o edad  =  valor asignado
    this.nombre = nombre,
    //Este dato es un dato fijo, es decir, si quiero agregar otro usuario con otro nombre, al consultar su nombre obtendra el mismo nombre asignado
    //this.edad = 28,
    this.edad = edad,
    this.correo = correo;
    //Lo recomendable es que al final lleve punto y coma ;
  }
  //Tambien pueden haber funciones dentro de una clase que tambien se les conoce como Metodo
  mostrarSaludo(){
    return 'Hola<br />';
  }
  //Recepciona el argumento y lo muestra con el metodo
  mostrarMensaje(mensaje){
    return mensaje;
  }
  //Para acceder a los parametros del constructor, se debe colocar los datos que requieras
  mostrarInfo(){
    return `
      <b>Nombre:</b> ${this.nombre} <br />
      <b>Edad:</b> ${this.edad} <br />
      <b>Correo:</b> ${this.correo} <br />
      <hr>
    `;
  }
}
//Indica que Diego sea un nuevo usuario y que tenga las mismas propiedades
//Esto es una nueva instancia de la clase Usuario
const diego = new Usuario('Diego', 28, 'diego@gmail.com');
//document.write(diego.correo);
//alert(diego.nombre);
//console.log(diego.edad);

const sebastian = new Usuario('Sebastian', 30, 'seba@gmail.com');
// document.write(sebastian.correo);
// alert(sebastian.nombre);
// console.log(sebastian.edad);

document.write(diego.mostrarSaludo());
//Tambien se le pueden pasar parametros a la funcion como argumento
document.write(diego.mostrarMensaje('Hola mundo <br />'));
//Este metodo no requiere ningun argumento
document.write(diego.mostrarInfo());
document.write(sebastian.mostrarInfo());
//Lo importante es que estamos ahorrandonos codigo gracias a la clase

//Herencias, significa que la clase Estudiante hereda los mismos parametros que Usuario
class Estudiante extends Usuario {
  //Si creamos un nuevo metodo constructor, tenemos que hacer el llamado de la otra clase-constructor para poder utilizar los mismos parametros
  constructor(nombre, edad, correo, carrera){
    //Super recibira las propiedades que teniamos anteriormente, ejecuta el constructor que teniamos antes
    super(nombre, edad, correo);
    this.carrera = carrera;
  }
  mostrarInfo(){
    return `
      <b>Nombre:</b> ${this.nombre} <br />
      <b>Edad:</b> ${this.edad} <br />
      <b>Correo:</b> ${this.correo} <br />
      <b>Carrera:</b> ${this.carrera} <br />
      <hr>
    `;
  }
}
const ingrid = new Estudiante('Ingrid', 26, 'ingrid@gmail.com', 'Telecomunicaciones');
document.write(ingrid.mostrarInfo());
