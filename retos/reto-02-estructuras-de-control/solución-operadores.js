// OPERADOR `==`
//Comprobar si dos cadenas de texto representan el mismo número.
let numeroTexto = "20";
let numeroReal = 20;

if (numeroTexto == numeroReal) {
  console.log('Los valores son equivalentes.');
} else {
  console.log('Los valores no son equivalentes.');
}

// OPERADOR `===`
//Ver si dos variables son exactamente iguales

   let edadTexto = "30";
   let edadNumero = 30;

   if (edadTexto === edadNumero) {
     console.log('Las variables son exactamente iguales.');
   } else {
     console.log('Las variables no son exactamente iguales.');
   }

// OPERADOR `!=`
//Comparar dos colores y ver si son diferentes
let color1 = "rojo";
let color2 = "azul";

if (color1 != color2) {
  console.log('Los colores son diferentes.');
} else {
  console.log('Los colores son iguales.');
}

// OPERADOR `!==`
// Verificar si dos valores son distintos, en número o tipo
let valor1 = 10;
   let valor2 = "10";

   if (valor1 !== valor2) {
     console.log('Los valores o tipos son distintos.');
   } else {
     console.log('Los valores y tipos son iguales.');
   }
// OPERADOR `>`
//Determinar si una temperatura es más alta que otra
let temperaturaActual = 35;
   let temperaturaDeseada = 25;

   if (temperaturaActual > temperaturaDeseada) {
     console.log('La temperatura es demasiado alta.');
   } else {
     console.log('La temperatura es adecuada.');
   }
// OPERADOR `<`
//Comprobar si alguien no cumple con la altura mínima
let alturaPersona = 150;
   let alturaMinima = 160;

   if (alturaPersona < alturaMinima) {
     console.log('No cumples con la altura mínima.');
   } else {
     console.log('Cumples con la altura mínima.');
   }
// OPERADOR `<=`
// Comprobar si un vehículo puede andar por una carretera
let velocidadMaxima = 120;
let velocidadVehiculo = 100;

if (velocidadVehiculo <= velocidadMaxima) {
  console.log('Puedes circular por la carretera.');
} else {
  console.log('Velocidad excesiva, no puedes circular.');
}
// OPERADOR `<=`
// Verificar si un producto está en oferta
let precioOriginal = 100;
let precioOferta = 80;
let descuento = 20; 


if (precioOferta <= precioOriginal * (1 - descuento / 100)) {
  console.log('El producto está en oferta!');
} else {
  console.log('El producto no está en oferta.');
}
// OPERADOR `>=`
// Comprobar si hay existencias de un producto
let stock = 10;
let cantidadPedida = 5;

if (stock >= cantidadPedida) {
  console.log('El producto está disponible.');
} else {
  console.log('Lo siento, no hay suficiente stock.');
}
// OPERADOR `>=`
// Verificar si un usuario tiene suficientes puntos para obtener una recompensa
let puntos = 500;
let puntosRequeridos = 300;

if (puntos >= puntosRequeridos) {
  console.log('Puedes canjear tus puntos por una recompensa.');
} else {
  console.log('No tienes suficientes puntos para canjear una recompensa.');
}
// OPERADOR `&&`
//Verificar si puedes entrar al club con dos condiciones
let esMayorDeEdad = true;
   let tieneIdentificacion = true;

   if (esMayorDeEdad && tieneIdentificacion) {
     console.log('Puedes entrar al club.');
   } else {
     console.log('No puedes entrar al club.');
   }
// OPERADOR `\|\|`
// Comprobar si tienes acceso a la biblioteca si eres estudiante o profesor
let esEstudiante = false;
   let esProfesor = true;

   if (esEstudiante || esProfesor) {
     console.log('Tienes acceso a la biblioteca.');
   } else {
     console.log('No tienes acceso a la biblioteca.');
   }
// OPERADOR `!`
// Saber si hoy es un día laborable o fin de semana
let esFinDeSemana = false;

   if (!esFinDeSemana) {
     console.log('Es un día laborable.');
   } else {
     console.log('Es fin de semana.');
   }
// OPERADOR `??`
// Asignar un nombre predeterminado si no tienes uno
let nombreUsuario;
    let nombrePorDefecto = "Invitado";

    console.log(`Bienvenido, ${nombreUsuario ?? nombrePorDefecto}!`);
    // OPERADOR `? :`
    // Decidir si aprobaste o reprobaste según tu puntuación
    let puntuacion = 85;
    let resultado = puntuacion >= 60 ? 'Aprobado' : 'Reprobado';

    console.log(`Tu resultado es: ${resultado}.`);
