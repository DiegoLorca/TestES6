//La TERCERA forma de exportar es dejandolo por defecto, se puede hacer solo por una vez
//Se puede colocar export default junto con la clase
//export default class Persona {
class Persona {
  constructor(nombre, edad){
    this.nombre = nombre,
    this.edad = edad;
  }
  mostrarInfo(){
    console.log(`${this.nombre} tiene ${this.edad} años.`);
  }
}
//O se puede colocar export default en la parte inferior
export default Persona;
