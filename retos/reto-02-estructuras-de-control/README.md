# Reto 2: Estructuras de control

## Instrucciones

1. Repaso de la [clase 2](/clases/clase-02-estructuras-de-control/README.md) y [ejemplos](/clases/clase-02-estructuras-de-control/ejemplos.js)
2. Investigar los operadores lógicos y de comparación en JavaScript
3. Dentro de la carpeta `reto-02-estructuras-de-control` crear un archivo llamado `solución-operadores.js` en el cual se escribirá la solución del reto.
4. Realizar un ejemplo de condición por cada uno de los operadores investigados imprimiendo en consola el resultado para cada caso.

## Ejemplo:

```javascript
if (edadPersona >= edadMinima) {
  console.log('Puedes ingresar')
} else {
  console.log('No puedes ingresar, debes ser mayor de edad')
}
```

## Listado operadores lógicos y de comparacion

| **Operador** | **Descripción**                                                                       | **Ejemplo**            | **Resultado** |
| ------------ | ------------------------------------------------------------------------------------- | ---------------------- | ------------- |
| `==`         | Igualdad (compara valores, no tipos)                                                  | `5 == '5'`             | `true`        |
| `===`        | Estrictamente igual (compara valores y tipos)                                         | `5 === '5'`            | `false`       |
| `!=`         | Desigualdad (compara valores, no tipos)                                               | `5 != '5'`             | `false`       |
| `!==`        | Desigualdad estricta (compara valores y tipos)                                        | `5 !== '5'`            | `true`        |
| `>`          | Mayor que                                                                             | `6 > 5`                | `true`        |
| `<`          | Menor que                                                                             | `4 < 5`                | `true`        |
| `>=`         | Mayor o igual que                                                                     | `5 >= 5`               | `true`        |
| `<=`         | Menor o igual que                                                                     | `4 <= 5`               | `true`        |
| `&&`         | Y lógico (AND)                                                                        | `true && false`        | `false`       |
| `\|\|`       | O lógico (OR)                                                                         | `true \|\| false`      | `true`        |
| `!`          | Negación lógica (NOT)                                                                 | `!true`                | `false`       |
| `??`         | Nullish coalescing (retorna el valor derecho si el izquierdo es `null` o `undefined`) | `null ?? 'default'`    | `'default'`   |
| `? :`        | Operador ternario (condicional)                                                       | `5 > 3 ? 'Yes' : 'No'` | `'Yes'`       |
