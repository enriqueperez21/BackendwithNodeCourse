let datos = {
    name: "student´s name",
    carrera: "Civil"
}
datos.valor = 10
datos = {...datos, valor3 : 20}
const nuevoDato = {...datos, val: 5}
console.log(nuevoDato)