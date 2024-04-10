const datos = {
    name: "student´s name",
    carrera: "Civil"
}

const leerDatos = (params) =>{
    console.log(params.name)
    console.log(params.carrera)
}

const leerDatosDes1 = ({name, carrera}) =>{
    console.log(name)
    console.log(carrera)
}

const leerDatosDes2 = (params) =>{
    const {name, carrera} = params
    console.log(name)
    console.log(carrera)
}

leerDatosDes2(datos)