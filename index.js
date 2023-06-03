const argv = require("yargs-parser")(process.argv.slice(2))

//console.log("argv", argv);

//Parseando los argumentos:
//const name = argv.nombre
/*const apellido = argv.apellido */
//console.log(`Nombre :${nombre} Apellido : ${apellido}`);

/*
* Reutilizar el ejercicio de mandarle como argumento un nombre, pero utilizando yargs parser y buscarlo en el arreglo nombres. Si es encontrado, imprimir Bienvenido, de lo contrario, imprimir fuera de aquí.
* La impresión de 'Bienvenido', tiene qque ser en arcoiris
* La impresión de 'Fuera de aquí' dene ser en color rojo.
*/

/* const nombre = process.argv[2]; //Accediendo al 3er valor del Objeto Procesos en su propiedad argv (argumentos) con índice [2] */

const nombre = argv.nombre;
const colors = require('colors');

const nombres = [
    "Andres",
    "Andres de Anda",
    "Christian",
    "Damian",
    "Dani",
    "Diego",
    "Dan",
    "Gustavo",
    "Ignacio",
    "Jorge",
    "Karla",
    "Lau",
    "Luis",
    "Mara",
    "Max",
    "Pao",
    "Roberto",
    "Samantha"
  ];

  const findName = (nombre) => {
    console.log("Estamos en la función findName con el nombre =>", nombre);
    /* const existe = nombres.includes(nombre); //Devuelve true or false */
    const existe = nombres.filter(_nombre => nombre === _nombre);
    if (existe.length > 0) {
        console.log("Bienvenido".rainbow);
    } else {
        console.log("Fuera de aquí".red);
    }
  };

  findName(nombre)
  


