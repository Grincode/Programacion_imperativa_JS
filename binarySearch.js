//Algoritmo de busqueda Bynary Search
//El array debe estar ordenado de menor a mayor
//Ventaja una vez ordenado el array encuentra el valor en menos iteraciones

let array = [1, 2, 3, 4, 5, 6, 7];
let elementoBuscado = 12;

function busquedaBinaria(array, elemento) {
  let indiceBusqueda = 0;
  let limiteBusqueda = array.length - 1;

  while (indiceBusqueda <= limiteBusqueda) {
    const INDICEMITAD = Math.round((indiceBusqueda + limiteBusqueda) / 2);

    const ELEMENTOMEDIO = array[INDICEMITAD];
    if (ELEMENTOMEDIO == elemento) {
      return INDICEMITAD;
    }
    if (ELEMENTOMEDIO > elemento) {
      limiteBusqueda = INDICEMITAD - 1;
    } else {
      indiceBusqueda = INDICEMITAD + 1;
    }
  }
  return null;
}

let indiceEncontrado = busquedaBinaria(array, elementoBuscado);
console.log("El indice del elemento es: " + indiceEncontrado);
