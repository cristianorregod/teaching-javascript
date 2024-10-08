//Declarar
const edad = 20
function saludar(nombrePersona) {
    return `Hola ${nombrePersona}, bienvenido a la clase.`
}

const saludo = saludar('Brayan')
const saludo2 = saludar('Cristian')
console.log(saludo)
console.log(saludo2)

const multiplicar = function (a, b) {
    return a * b
}

//Ejemplo de función que recibe como parametro otra función
const calculadora = (multiplicar) => {
    return multiplicar(2, 3)
}
console.log(multiplicar(2, 3))

const sumar = (a, b) => a + b

console.log(sumar(2, 3))
