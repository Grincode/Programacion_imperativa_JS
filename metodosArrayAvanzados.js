/* .slice()
Sintaxis: let nuevoArray = arrayOriginal.slice(inicio, fin);
*/

let frutas = ["manzana", "pera", "banana", "sandia", "fresa"];

let primerasTres = frutas.slice(0, 3);
console.log(primerasTres);

let desdePera = frutas.slice(1);
console.log(desdePera);

let ultimasDos = frutas.slice(-2);
console.log(ultimasDos);

let entreDosIndices = frutas.slice(-3, 4);
console.log(entreDosIndices);

/* .splice()
Sintaxis: arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elmento2, ...);
*/

let meses = ["enero", "febrero", "marzo", "abril", "mayo"];
meses.splice(1, 2, "NuevoMes1", "NuevoMes2");
console.log(meses);

meses.splice(2, 0, "NuevoMes3");
console.log(meses);

/* .sort()
Sintaxis: arrayOriginal.sort();
*/

let numeros = [3, 2, 1, 4, 5];
numeros.sort();
console.log(numeros);

let palabras = ["auto", "perro", "gato", "zorro", "elefante", "perra"];
palabras.sort();
console.log(palabras); //puede ordenarlo por código ASCII

/* .find()
Sintaxis: let resultado = arrayOriginal.find(funcionDePrueba(elemento));
*/

let edades = [10, 15, 20, 25, 30];
let mayorDeEdad = edades.find((elemento) => (elemento) => 18);
console.log(mayorDeEdad);

let primeraEdadMayor = edades.find((edad) => edad > 30);
console.log(primeraEdadMayor);
