import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class ProductsService {
    async getProducts():Promise<any[]>{
        const products = await prisma.product.findMany()
        return products
    }

    async postProducts(productData:any):Promise<any[]>{
        const products = await prisma.product.create({
            data: productData
        })
        console.log(products)
        return
    }
    
    async putProducts(productData:any):Promise<any[]>{
        const products = await prisma.product.update({
            where: {id: productData.id},
            data: productData
        })
        console.log(products)
        return
    }

    async deleteProducts(productData:any):Promise<any>{
        await prisma.product.delete({
            where: {id: productData.id}
        })
        return "Dato eliminado"
    }
}
