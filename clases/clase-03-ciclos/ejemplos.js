for (let nombreVariable = 0; nombreVariable < 5; nombreVariable++) {
  console.log('Soy menor que 5, mi valor es: ', nombreVariable)
}

const estudiantes = ['Juan', 'Maria', 'Pedro', 'Luisa', 'Carlos', 'Ana']

for (let i = 0; i < estudiantes.length; i++) {
  console.log('Enviando notas por correo a: ', estudiantes[i])
}

//Ejemplo con while

let contador = 0
while (contador < estudiantes.length) {
  console.log('Enviando notas por correo a: ', estudiantes[contador])
  contador++
}

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
