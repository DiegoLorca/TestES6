//La PRIMERA forma para exportar se puede exportar todo tipo de mensaje, variable, funcion etc.
export const mensajeAlerta = (mensaje) => {
  alert(mensaje);
}

const saludo = () => {
  console.log('Saludos');
}
//Si no se quiere agregar la palabra export al codigo, se puede poner al final de la linea de codigo, esta es la SEGUNDA forma para exportar
export {saludo};
