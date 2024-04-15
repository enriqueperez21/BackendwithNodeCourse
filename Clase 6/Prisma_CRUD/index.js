import { PrismaClient } from '@prisma/client'
import express from 'express'
import morgan from 'morgan'

import productsRoute from "./src/routes/routes.products.js"

const prismaApi = express()

const prisma = new PrismaClient()

prismaApi.use(morgan('tiny'))

prismaApi.use(express.json())

prismaApi.use("/products", productsRoute)

prismaApi.listen(3000, ()=>console.log("servidor funcionando"))