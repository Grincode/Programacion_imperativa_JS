//Algoritmo de busqueda lineal
let array = [14, 3, 92, 110, 5, 17, 13, 48, 32];
let elementoBuscado = 14;

let posicion = -1;
for (let i = 0; i < array.length; i++) {
  if (array[i] === elementoBuscado) {
    posicion = i;
    console.log(
      `El elemento ${elementoBuscado} se encuentra en el indice ${i}`
    );
    break;
  } else {
  }
}

console.log(posicion);

function busquedaLineal(arr, elemento) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i;
    }
  }
  return -1;
}
let indiceEncontrado = busquedaLineal(array, elementoBuscado);

if (indiceEncontrado == -1) {
  console.log("El elemento no se encuentra en el array");
} else {
  console.log("La nueva posicion del elemento es: " + indiceEncontrado);
}
