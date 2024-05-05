//Objetos literales

//crear un objeto

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 28,
  coloresFavoritos: ["azul", "amarillo", "rojo"],
  saludar: function () {
    return "Hola " + this.nombre;
  },
};

//acceder a las propiedades de un objeto
persona.deporteFavorito = "futbol";
persona.edad = 30;

console.log(persona);

//acceder a un metodo de un objeto

let saludo = persona.saludar();
console.log(saludo);

//this
