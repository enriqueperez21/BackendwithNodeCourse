import { Router } from "express";
import products from "../models/products.js";
import mongoose from "mongoose";

//Crud completo
const route =  Router()

route.get("/",async (req, res)=>{
    try{
        const ourProducts =  await products.find()
        res.send(ourProducts)
    }catch(error){
        console.log(error)
    }
})

route.get("/:id",async (req, res)=>{
    try{
        const idProduct = req.params.id
        const ourProducts =  await products.findOne({_id: idProduct})
        res.send(ourProducts)
    }catch(error){
        console.log(error)
    }
})

route.post("/",async (req, res)=>{
    try{
        console.log(req.body)
        const ourProducts =  new products(req.body)
        await ourProducts.save()
        res.send(ourProducts)
    }catch(error){
        console.log(error)
    }
})

route.put("/:id",async (req, res)=>{
    try{
        const idProduct = req.params.id
        console.log(idProduct)
        const newProducts = await products.findByIdAndUpdate(idProduct, req.body, {new: true})
        res.send(newProducts)
    }catch(error){
        console.log(error)
    }
})

route.delete("/:id",async (req, res)=>{
    try{
        const idProduct = req.params.id
        await products.findByIdAndDelete(idProduct)
        res.send("eliminado")
    }catch(error){
        console.log(error)
    }
})

export default route