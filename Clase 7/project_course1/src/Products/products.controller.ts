import { Controller, Get, Post } from "@nestjs/common";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

@Controller("products")
export class ProductsController{
    constructor() {}
    @Get("/")
    async getProducts():Promise<any[]>{
        const products = await prisma.product.findMany()
        console.log(products)
        return products
    }
    @Post("/")
    async postProducts():Promise<any[]>{
        const newProduct = await prisma.product.create({
            data: {
                name: "Gaseosa",
                price: 2.5,
                cost: 1.10,
                category: "Bebidas",
                amount: 5
            }
        })
        console.log(newProduct)
        return 
      }

}