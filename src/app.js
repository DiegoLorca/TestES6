//Siempre se tiene que exportar e importar desde la pagina de origen a esta.
import {mensajeAlerta, saludo} from './modulos/mensajeAlerta';
//La forma de importar por defecto se puede colocar cualquier nombre, tambien podemos omitir las llaves
//Cuando se exporta por defecto se importa solo una cosa.
import Clase from './modulos/clasePersona';

mensajeAlerta('Hola Mundo');
//saludo();

const diego = new Clase('Diego', 28);
diego.mostrarInfo();
