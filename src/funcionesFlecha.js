const nombres = ['Diego', 'Roberto', 'Abraham', 'Nicolas'];

const numero_caracteres = nombres.map(function(nombre){
  //console.log(nombre.length);
  //console.log(`${nombre} tiene ${nombre.length} letras.`);
});
//Función flecha
//(parametro) => {
//  return codigo que quiero ejecutar
//}

//Funcion flecha
//const num_caracteres = nombres.map((nombre) => {
//  return `${nombre} tiene ${nombre.length} letras.`;
//});

//Funcion flecha optimizada
const num_caracteres = nombres.map( nombre => `${nombre} tiene ${nombre.length} letras.`);
console.log(num_caracteres);
