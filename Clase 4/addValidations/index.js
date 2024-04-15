import express from "express"
import saludosRoute from "./src/routes/routes.saludos.js"
import morgan from "morgan"
import { connectDBMongo } from "./db.js"
import { port } from "./config.js"
import productsRoute from "./src/routes/routes.products.js"
import userRoute from "./src/routes/routes.user.js"
import { verificarId } from "./src/middlewares/verificarDatos.js"
import jwt from 'jsonwebtoken'

const secret = '1234567';

const usuario = 'estudiante'; // Información del usuario

const payload = {
  usuario: 'Admin23', // Se puede incluir más información del usuario
  password: "123435",
  rol: 'usuario' // Opcional
};

const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Token válido por 1 hora

const decoded = jwt.verify(token, secret)

const appBackend = express()
//Conexión a base de datos
connectDBMongo()

//Middleware Morgan
appBackend.use(morgan('tiny'))

appBackend.use(express.json())

//Exportacion de ruta desde saludos
appBackend.use("/saludos",saludosRoute)
appBackend.use("/products", verificarId,productsRoute)
appBackend.use("/user", userRoute)

appBackend.listen(port, ()=>console.log("Servidor activo "+port))