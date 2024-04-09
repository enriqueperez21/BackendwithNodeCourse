import express from "express"
import saludosRoute from "./src/routes/routes.saludos.js"
import morgan from "morgan"

const appBackend = express()
const port = 3000

appBackend.use(morgan('tiny'))

//middleware son fnciones
function scan(req, res, next){
    console.log("")
    next()
}

appBackend.use(express.json())

appBackend.get("/error",(req, res)=>{
    res.status(500).send("Mi error")
})

appBackend.get("/hola/:name", scan ,(req, res)=>{
    res.send("Hello "+req.params.name)
})

//Exportacion de ruta desde saludos
appBackend.use("/saludos",saludosRoute)

appBackend.listen(port, ()=>console.log("Servidor activo "+port))