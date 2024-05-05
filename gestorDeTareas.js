const prompt = require("prompt-sync")({ sigint: true });

//Array para almacenar tareas

let tareas = [];
let categoriasNombre = ["Personal", "Trabajo", "Estudios", "Otros"];

//Funcion para mostrar todoas las categorias

function mostrarTodasLasCategorias() {
  console.log("Categorias existentes: ");
  categoriasNombre.forEach(function (categoria, indice) {
    console.log(indice + ": " + categoria);
  });
}

// Agregar nuevas categorias

function agregarNuevaCategoria(nombreCategoria) {
  categoriasNombre.push(nombreCategoria);
  console.log("Nueva categoria " + nombreCategoria + " agregada correctamente");
}

//Funciones para agrear una nueva tarea array

function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
  mostrarTodasLasCategorias();

  let numeroCategoria = parseInt(prompt("Escribe el indice de la categoria: "));
  if (numeroCategoria >= 0 && numeroCategoria < categoriasNombre.length) {
    tareas.push({
      nombre: nombreRecibido,
      completada: false,
      fechaLimite: fechaLimiteRecibida,
      categoria: numeroCategoria,
    });
    console.log("Tarea agregada con exito");
  } else {
    console.log("Indice invalido");
  }
}

//Eliminar una tarea

function eliminarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    console.log("Tarea eliminada");
  } else {
    console.log("Indice invalido");
  }
}

//Funcion para marcar una tarea como completada

function completarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = true;
    console.log("Tarea completada");
  } else {
    console.log("Indice invalido");
  }
}

//Modificar una tarea especifica

function modificarTarea(
  indice,
  nuevoNombre,
  nuevaFechaLimite = null,
  nuevoNumeroCategoria
) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].nombre =
      nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;
    tareas[indice].fechaLimite =
      nuevaFechaLimite !== undefined
        ? nuevaFechaLimite
        : tareas[indice].fechaLimite;
    tareas[indice].categoria =
      nuevoNumeroCategoria !== undefined
        ? nuevoNumeroCategoria
        : tareas[indice].categoria;
    console.log("Modificación correcta");
  } else {
    console.log("Indice invalido");
  }
}

// Funcion que filtra tareas por categoria}

function filtrarTareasPorCategoria(numeroCategoria) {
  let tareasFiltradas = tareas.filter(function (tarea) {
    return tarea.categoria === numeroCategoria;
  });

  return tareasFiltradas;
}

// Funcion que muestro cantidad de tareas completadas

function contarTareasCompletadasPorCategoria(numeroCategoria) {
  let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
  let tareasCompletadas = tareasCategoria.reduce(function (contador, tarea) {
    return tarea.completada ? contador + 1 : contador;
  }, 0);

  let tareasEnTotal = tareasCategoria.length;
  console.log(
    "Tareas completadas de la categoria " +
      numeroCategoria +
      ": " +
      tareasCompletadas +
      " de " +
      tareasEnTotal +
      " tareas!"
  );
}

// Mostrar todas las tareas no completadas

function mostrarTareasNoCompletadas() {
  console.log("Tareas no completadas: ");
  tareas.forEach(function (tarea) {
    if (!tarea.completada) {
      console.log(
        "Nombre: " +
          tarea.nombre +
          " Categoría: " +
          categoriasNombre[tarea.categoria]
      );
    }
  });
}

function mostrarMenu() {
  console.log(" ---- Menu de Opciones --- ");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Modificar una tarea");
  console.log("5. Mostrar todas las tareas");
  console.log("6. Mostrar todas las categorias");
  console.log("7. Agregar nueva categoria");
  console.log("8. Filtrar tareas por categoria");
  console.log("9. Visualizar cantidad de tareas completadas por categoria");
  console.log("10. Mostrar tareas no completadas");
  console.log("0. Salir");
}

//Funcion para interactuar con el usuario

function interactuar() {
  let opcion = -1;
  while (opcion !== 0) {
    mostrarMenu();
    opcion = parseInt(prompt("Indique una opcion: "));

    switch (opcion) {
      case 1:
        let = nombreTareaNueva = prompt("Ingrese el nombre de la tarea nueva:");
        agregarTarea(nombreTareaNueva);
        break;

      case 2:
        let = indiceAEliminar = parseInt(
          prompt("Ingrese el indice de la tarea a eliminar:")
        );
        eliminarTarea(indiceAEliminar);
        break;

      case 3:
        let = indiceACompletar = parseInt(
          prompt("Ingrese el indice de la tarea a completar:")
        );
        completarTarea(indiceACompletar);
        break;

      case 4:
        let indice = parseInt(
          prompt("Ingrese el indice de la tarea a modificar:")
        );
        if (indice >= 0 && indice < tareas.length) {
          let opcion = parseInt(
            prompt(
              " Que propiedad desea modificar? 1.Nombre, 2. Fecha Limite, 3. Categoría"
            )
          );
          switch (opcion) {
            case 1:
              let nombreNombre = prompt("Ingrese el nuevo nombre:");
              modificarTarea(indice, nombreNombre);
              break;

            case 2:
              let nuevaFechaLimite = prompt("Ingrese la nueva fecha limite:");
              modificarTarea(indice, undefined, nuevaFechaLimite);
              break;

            case 3:
              let nuevoNumeroDeCategoria = parseInt(
                prompt("Ingrese el nuevo indice de categoria:")
              );
              if (
                nuevoNumeroDeCategoria >= 0 &&
                nuevoNumeroDeCategoria < categoriasNombre.length
              ) {
                modificarTarea(
                  indice,
                  undefined,
                  undefined,
                  nuevoNumeroDeCategoria
                );
              } else {
                console.log("Indice de categoria invalido");
              }
              break;

            default:
              console.log("Opcion invalida");
              break;
          }
        } else {
          console.log("Indice de tarea invalido");
        }
        break;

      case 5:
        console.log(" -- LISTA DE TAREAS -- ");
        console.log(tareas);
        break;

      case 6:
        mostrarTodasLasCategorias();
        break;

      case 7:
        let = nuevaCategoria = prompt("Ingrese la nueva categoria:");
        agregarNuevaCategoria(nuevaCategoria);
        break;

      case 8:
        mostrarTodasLasCategorias();
        let = nroCategoria = parseInt(
          prompt("Ingrese el número de la categoria a filtrar:")
        );
        filtrarTareasPorCategoria(nroCategoria);
        let tareasCategoria = filtrarTareasPorCategoria(nroCategoria);

        console.log(" -- TAREAS DE LA CATEGORIA SELECCIONADA -- ");
        console.log(tareasCategoria);
        break;

      case 9:
        mostrarTodasLasCategorias();
        let nroCateg = parseInt(prompt("Ingrese el nro de categoria:"));
        contarTareasCompletadasPorCategoria(nroCateg);
        break;

      case 10:
        mostrarTareasNoCompletadas();
        break;

      default:
        console.log("Opcion invalida");
        break;
    }
  }
}

interactuar();
