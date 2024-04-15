import express from "express"
import saludosRoute from "./src/routes/routes.saludos.js"
import morgan from "morgan"
import { connectDBMongo } from "./db.js"
import { port } from "./config.js"
import productsRoute from "./src/routes/routes.products.js"

const appBackend = express()
//Conexión a base de datos
connectDBMongo()

//Middleware Morgan
appBackend.use(morgan('tiny'))

appBackend.use(express.json())

//Exportacion de ruta desde saludos
appBackend.use("/saludos",saludosRoute)
appBackend.use("/products",productsRoute)

appBackend.listen(port, ()=>console.log("Servidor activo "+port))