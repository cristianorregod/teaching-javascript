// Comprobar si un vehículo puede andar por una carretera
let velocidadMaxima = 120;
let velocidadVehiculo = 100;

if (velocidadVehiculo <= velocidadMaxima) {
  console.log('Puedes circular por la carretera.');
} else {
  console.log('Velocidad excesiva, no puedes circular.');
}

// Verificar si un producto está en oferta
let precioOriginal = 100;
let precioOferta = 80;
let descuento = 20; // porcentajepwd


if (precioOferta <= precioOriginal * (1 - descuento / 100)) {
  console.log('El producto está en oferta!');
} else {
  console.log('El producto no está en oferta.');
}

// Comprobar si hay existencias de un producto
let stock = 10;
let cantidadPedida = 5;

if (stock >= cantidadPedida) {
  console.log('El producto está disponible.');
} else {
  console.log('Lo siento, no hay suficiente stock.');
}

// Verificar si un usuario tiene suficientes puntos para obtener una recompensa
let puntos = 500;
let puntosRequeridos = 300;

if (puntos >= puntosRequeridos) {
  console.log('Puedes canjear tus puntos por una recompensa.');
} else {
  console.log('No tienes suficientes puntos para canjear una recompensa.');
}