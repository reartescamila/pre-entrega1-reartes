//comentario de una sola línea
/* -
-let edad para definir una variable 
-siempre al final ;
let edad = 45;
*/

// let numero = parseInt(prompt("Ingrese un numero"));

// // for (let i = 1; i <= 10; i++) {
// //   let resultado = numero * i;
// //   alert(numero + " X " + i + " = " + resultado);
// // }

// let nombre = prompt("ingrese un nombre");

// while (nombre != "ESC") {
//   switch (nombre) {
//     case "ANA":
//       alert("Hola AnA");
//       break;
//     case "Juan":
//       alert("Hola Juan");
//       break;
//     default:
//       for (i = 0; i < 3; i++) {
//         alert("Quien eres?");
//         break;
//       }
//   }
// }

// let nombre = prompt("Ingrese el nombre");

// while (nombre != "ESC") {
//   switch (nombre) {
//     case "ANA":
//       alert("Hola Ana");
//       break;

//     case "JUAN":
//       alert("Hola Juan");
//       break;

//     default:
//       for (let i = 0; i < 3; i++) {
//         alert("Quién eres???");
//       }
//       break;
//   }

//   nombre = prompt("Ingrese el nombre");
// }

// class producto {
//     constructor(nombre, edad, dni);{

//     this.nombre= nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
// }

//     vender(){
//     this.cantidad -= 1;
//     }
// }

// const producto1 = new producto(monitor, 500, 4);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);

let cantidadPasajes = 45;
let compra = prompt("Ingrese cantidad de pasajes a comprar");
if (compra <= 0 || "") {
  alert("Usted no ha ingresado ninguna cantidad");
}
while (cantidadPasajes >= 0) {
  if (cantidadPasajes >= 0) {
    let resultado = cantidadPasajes - compra;
    alert(
      `Usted ha comprado ${compra} cantidad de pasajes, quedan ${resultado} pasajes`
    );
    cantidadPasajes = resultado--;
  } else {
    alert("No quedan asientos disponibles");
  }
  compra = parseInt(prompt("Ingrese cantidad de pasajes a comprar"));
}
