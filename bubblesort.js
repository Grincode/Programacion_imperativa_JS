// Algoritmo de ordenamiento bubble sort

let array = [5, 4, 1, 6, 3, 2];

for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}

console.log(array);

//Ordenamiento de objetos
//siempre al trabajar con objetos debo evitar los desbordamientos

let numeros = [
  {
    nombre: "Juan",
    edad: 28,
  },
  {
    nombre: "Abel",
    edad: 30,
  },
  {
    nombre: "Maria",
    edad: 19,
  },
];

for (let j = 0; j < numeros.length; j++) {
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i].edad > numeros[i + 1].edad) {
      let temp = numeros[i];
      numeros[i] = numeros[i + 1];
      numeros[i + 1] = temp;
    }
  }
}

console.log(numeros);
