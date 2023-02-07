//Pre Entrega Camila Reartes

// EJERCICIO 1: COMPRA DE PASAJES:
//--------------------------------
function comprarPasajes() {
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
}

// EJERCICIO 2: ...
// --------------------
function comprar() {
  let compra = prompt("ingrese cantidad de pasajes a comprar. Precio: $500");
  for (let i = 0; i < compra; i++) {
    nombres = prompt("ingrese nombre y apellido del pasajero");
  }
  let precioTotal = 500 * compra;
  alert(`los pasajeros son ${compra}. El precio total es: $${precioTotal}ARS`);
}

comprarPasajes();
comprar();
