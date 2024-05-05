//Crear una matriz
let matriz = [
  [1, 2, 3],
  [4, 5],
];

console.table(matriz);
/*

// opcion2
let arraymatriz = [];

let fila1 = ["x0", "x1", "x2"];
let fila2 = ["x3", "x4", "x5"];
let fila3 = ["x6", "x7", "x8"];

arraymatriz[0] = fila1;
arraymatriz[1] = fila2;
arraymatriz[2] = fila3;

//Visualizar una matriz
//console.table(arraymatriz);

//Acceder a un elemento de una matriz
//console.log(matriz[1][2]);

//Modificar un elemento de una matriz
matriz[1][2] = 10;
console.table(matriz);

//Recorrer una columna especifica

for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i][0]);
}

//Recorrer una fila especifica
for (let i = 0; i < matriz[0].length; i++) {
  console.log(matriz[0][i]);
}
*/

//Recorrer la totalidad de datos de la matriz

/*
for (let i = 0; i < matriz.length; i++) {
  //con esto recorro las filas

  for (let j = 0; j < matriz[i].length; j++) {
    //con esto recorro las columnas
    console.log(matriz[i][j]);
  }
}*/

//Filtrar matrices
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] % 2 == 0) {
      console.log(matriz[i][j]);
    }
  }
}
