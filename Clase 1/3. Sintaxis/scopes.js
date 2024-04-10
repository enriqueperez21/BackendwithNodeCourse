let miVariable = 'Prueba'
let variableFor = 'global'

for(let i = 0; i < 1; i++){
    let variableFor = 'del For'
    console.log(variableFor)
    console.log(miVariable)
    miVariable = 'cambio'
}

console.log(miVariable)
console.log(variableFor)