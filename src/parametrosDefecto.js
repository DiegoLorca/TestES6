//Nos permite decirle a js que si tenemos un parametro que no tenga valor, que se cree uno por defecto
function registrarUsuario(nombre, pais = 'No especificado', correo, telefono = 'No especificado'){
  return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}
console.log(registrarUsuario('Diego', undefined, 'correo@correo.cl', ));//no colocar '' porque lo toma como parametro vacio, debe colocarse undefined
