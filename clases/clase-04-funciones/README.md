# Funciones en javascript

## Concepto

Una función es un bloque de código reutilizable que se puede ejecutar en cualquier momento cuando es "invocada". Las funciones pueden recibir valores de entrada que se llaman parámetros y pueden devolver un valor al finalizar.

Ejemplo de uso:
Una receta de cocina es una función, que sigue ciertos pasos cuando se necesita (invocando la función), se puede dar ingredientes (parámetros) y al final se obtiene un plato de comida (valor que retorna)

Ejemplo de código:

```javascript
function saludar(nombrePersona) {
    return `Hola ${nombrePersona}, bienvenido a la clase.`
}
```

## Funciones como valores

Las fucniones son tratadas como valores, lo que significa que pueden ser almacenadas en variables, pasadas como argumentos a otras funciones o retornadas por otras funciones.

Ejemplo:

```javascript
const multiplicar = function (a, b) {
    return a * b
}
```

## Funciones de flecha (Arrow fucntions)

Son una manera más corta de escribir funciones, se usan para simplicaficar el código.

Ejemplo:

```javascript
const sumar = (a, b) => a + b
```
