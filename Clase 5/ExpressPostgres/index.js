import express from "express"
import morgan from "morgan"
import { port } from "./config.js"
import { prisma } from "./db.js"

const appBackend = express()
//Conexión a base de datos


//Middleware Morgan
appBackend.use(morgan('tiny'))

appBackend.use(express.json())

appBackend.post("/post",async (req, res)=>{
  const resultado = await prisma.post.create({
    title: "Prueba",
    content: "Saludo "
  })
  console.log(resultado)
  res.send("Enviado")
})

appBackend.listen(port, ()=>console.log("Servidor activo "+port))