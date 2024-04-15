import { Router } from "express";
import jwt from 'jsonwebtoken'
const secret = '1234567';

const route =  Router()

route.get("/",async(req, res)=>{
    const token = req.body.auth
    const user = jwt.verify(token, secret)
    console.log(user)
    res.send("Nombre de usuario: ")
})

export default route