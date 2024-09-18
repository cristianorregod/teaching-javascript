# Métodos

## Concepto

Son funciones asociadas a un objeto o un tipo de dato. Permiten realizar operaciones sobre los datos del objeto o estructura de datos con la que estan relacionados.

### Métodos de Array (Arreglo)

-   .map(): Crea un nuevo array con los resultados de aplicar una función u operación a cada uno de los elementos del array original.
    Ejemplo: Transformar una lista de precios en una lista de precios con descuento.

```javascript
const precios = [100, 200, 300]
const preciosConDescuento = precios.map((precio) => precio * 0.1)
```

-   .filter(): Crea un nuevo array con todos los elementos que cumplan una condición implementada en una función
    Ejemplo: Filtrar una lista de personas mayores de 18 años

```javascript
const edades = [12, 18, 25, 30, 17]
const mayoreDeEdad = edades.filter((edad) => edad >= 18)
```

-   .reduce(): Aplica una función sobre los elementos de un array para reducirlos a un solo valor.
    Ejemplo: Sumar todos los valores de un array de numeros

```javascript
const compra = [100, 200, 300]
const precioTotal = compra.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
```

-   .forEach(): Ejecuta una función en cada elemento del array, pero no devuelve un array nuevo.
    Ejemplo: Imprimir cada elemento de un array en consola

```javascript
const colores = ['rojo', 'vinotinto', 'azul', 'violeta', 'negro']
colores.forEach((color) => console.log(color))
```
