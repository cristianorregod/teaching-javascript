//Map
const precios = [100, 200, 300]
const preciosConDescuento = precios.map((precio) => precio - 25)

console.log('Precio sin descuento', precios)
console.log('Precio con descuento', preciosConDescuento)

//Filter
const edades = [12, 18, 25, 30, 17]
const mayoreDeEdad = edades.filter((edad) => edad >= 18)

console.log('Todas las personas', edades)
console.log('Mayores de edad', mayoreDeEdad)

//Reduce
const compra = [100, 200, 300]
const precioTotal = compra.reduce((acumulador, valorActual) => acumulador + valorActual, 0)

console.log('Compra', compra)
console.log('Precio total', precioTotal)

//ForEach
const colores = ['rojo', 'vinotinto', 'azul', 'violeta', 'negro']
colores.forEach((color) => console.log(color))

const post = [
    { id: 1, title: 'Mi primer post', image: 'https://img.com/1', tags: ['javascript', 'webdevelopment'] },
    {
        id: 2,
        title: 'Mi experiencia con React',
        image: 'https://img.com/2',
        tags: ['javascript', 'webdevelopment', 'react'],
    },
    {
        id: 3,
        title: 'Por qué dejé Angular',
        image: 'https://img.com/3',
        tags: ['javascript', 'webdevelopment', 'angular'],
    },
]
