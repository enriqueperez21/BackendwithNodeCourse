import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly ProductService:ProductsService){}
    @Get()
    async getProducts():Promise<any[]> {
        return await this.ProductService.getProducts()
    }
    @Post()
    async postProducts(@Body() productData: productsData):Promise<any[]> {
        return await this.ProductService.postProducts(productData)
    }
    @Put()
    async putProducts(@Body() productData: productsData):Promise<any[]> {
        return await this.ProductService.putProducts(productData)
    }
    @Delete()
    async deleteProducts(@Body() productData: productsData):Promise<any[]> {
        return await this.ProductService.deleteProducts(productData)
    }
}

interface productsData{
    id: any
    name: string
    price: DoubleRange
    cost: DoubleRange
    category: string
    amount: number
}