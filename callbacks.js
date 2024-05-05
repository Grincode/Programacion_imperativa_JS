// Los callbacks proporcionan mucha flexibilidad y modularidad a nuestro código permitiendo
// reutilizarlo en diferentes escenarios y que sea más mantenible

// Funcion que recorre un array y ejecuta un callback

function procesarArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

//Funcion de callbacks que muestra los elemntos del array

function mostrarElemento(elemento) {
  console.log(elemento);
}

function calcularCuadrado(elemento) {
  console.log(elemento * elemento);
}

function multiplicarPorDos(elemento) {
  console.log(elemento * 2);
}

//Crear nuestro array
let miArray = [1, 2, 3, 4, 5];

// Llamada a la funcion procesarArray
console.log("Recorrido de array: ");
procesarArray(miArray, mostrarElemento);

console.log("Multiplicar por dos: ");
procesarArray(miArray, multiplicarPorDos);

console.log("Cuadrado de cada elemento: ");
procesarArray(miArray, calcularCuadrado);
