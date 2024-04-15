import { Router } from "express";

const route =  Router()

route.get("/",(req, res)=>{
    res.send("Hola "+req.body.name+" desde saludos")
})


export default route