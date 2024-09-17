# Reto 3: Ciclos for y while

## Instrucciones

1. Repaso de la [clase 3](/clases/clase-03-ciclos/README.md) y [ejemplos](/clases/clase-03-ciclos/ejemplos.js)
2. Dentro de la carpeta `reto-03-ciclos` crear un archivo llamado `solución-ciclos.js` en el cual se escribirá la solución del reto.
3. Crea un bucle `for` que imprima en consola la tabla de multiplicar del 9.
   El resultado en la consola deberá verse así:
    ```bash
     9 x 1 = 9
     9 x 2 = 18
     9 x 3 = 27
     9 x 4 = 36
     9 x 5 = 45
     9 x 6 = 54
     9 x 7 = 63
     9 x 8 = 72
     9 x 9 = 81
     9 x 10 = 90
    ```
4. Crea un bucle `while` que imprima en consola los números del 9 al 1.
   El resultado en la consola deberá verse así:
    ```bash
     9
     8
     7
     6
     5
     4
     3
     2
     1
    ```
5. Encontrar el error en el siguiente código para que no sea un bucle infinito:

    ```javascript
    const estudiantesEmail = [
        { name: 'Ana', email: true },
        { name: 'Juan', email: false },
        { name: 'Victor', email: true },
    ]

    // Ciclo infinito: TODO -> Buscar el error
    for (let i = 0; i < estudiantesEmail.length; i++) {
        while (estudiantesEmail[i].email) {
            console.log('Enviando correo a: ', estudiantesEmail[i].name)
        }
    }
    ```
