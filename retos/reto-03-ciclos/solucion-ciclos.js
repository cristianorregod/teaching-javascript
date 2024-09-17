// bucle for
for (let i = 1; i <= 10; i++) {
    console.log(`9 x ${i} = ${9 * i}`)
}
// Bucle while para contar del 9 al 1
let numero = 9

while (numero >= 1) {
    console.log(numero)
    numero--
}

const estudiantesEmail = [
    { name: 'Ana', email: true },
    { name: 'Juan', email: false },
    { name: 'Victor', email: true },
]

// Corrección: tocaba Cambiar while por if por que while lo que provca que si email es true el bucle no se detenga
console.log('con condicion if')

for (let i = 0; i < estudiantesEmail.length; i++) {
    if (estudiantesEmail[i].email) {
        console.log('Enviando correo a: ', estudiantesEmail[i].name)
    }
}
console.log('con ciclo while')
for (let i = 0; i < estudiantesEmail.length; i++) {
    while (estudiantesEmail[i].email) {
        console.log('Enviando correo a: ', estudiantesEmail[i].name)
        break
    }
}
console.log(estudiantesEmail[0].email)
