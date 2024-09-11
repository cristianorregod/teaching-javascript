# Bucles o ciclos

Los ciclos o bucles en programación permiten repetir una sección de código varias veces. Esto es útil cuando necesitamos realizar una misma operación varias veces, por ejemplo, recorrer elementos de una lista o ejecutar una función hasta que se cumpla una condición.

## Tipos de bucles en JavaScript:

- for: Repite un bloque de código un número específico de veces.
- while: Ejecuta un bloque de código mientras una condición sea verdadera.
- do...while: Similar al while, pero garantiza que el bloque de código se ejecute al menos una vez.
- for...of: Recorre los elementos de un objeto iterable (como arrays, strings).
- for...in: Recorre las propiedades enumerables de un objeto.

1. for: Se usa cuando conocemos de antemano cuantas veces queremos que se ejecute el código. Se usa para iterar sobre secuencias numéricas o arreglos.

```javascript
for (inicializacion; condicion; incremento) {
  //Codigo que se va a ejecutar
}
```

Ejemplo:

```javascript
for (let nombreVariable = 0; nombreVariable < 5; nombreVariable++) {
  console.log('Soy menor que 5, mi valor es: ', nombreVariable)
}
```

2. while: Repite el código mientras se cumple una condición sea verdadera. Se usa cuando no sé exactamente cuantas veces debe ejecutarse el código pero si se que condiciones.

```javascript
while (condicion) {
  //El código que se va a ejecutar
}
```

Ejemplo:

```javascript
let contador = 0
while (contador < 5) {
  console.log(contador)
  contador++
}
```

### Ejemplos y Retos:

- [Ejemplo ciclos](/clases/clase-03-ciclos/ejemplos.js)
- [Reto 2: Ciclos for y while](/retos/reto-03-ciclos/README.md)
