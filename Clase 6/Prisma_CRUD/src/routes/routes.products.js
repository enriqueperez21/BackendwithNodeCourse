import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const apiRoute = Router()

const prisma = new PrismaClient()

apiRoute.get("/",async(req, res)=>{
    const products = await prisma.product.findMany()
    res.send(products)
})

apiRoute.post("/",async(req, res)=>{
    try {
        const newProduct = await prisma.product.create({
            data: req.body
        })
        res.send(newProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send("Fallo")
    }
})

apiRoute.put("/",async(req, res)=>{
    try {
        const newProduct = await prisma.product.update({
            where: {id: req.body.id},
            data: req.body
        })
        res.send(newProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send("Fallo")
    }
})

apiRoute.delete("/",async(req, res)=>{
    try {
        await prisma.product.delete({where: {id: req.body.id}})
        res.send("Eliminado con exito")
    } catch (error) {
        console.log(error)
        res.status(500).send("Fallo")
    }
})

export default apiRoute