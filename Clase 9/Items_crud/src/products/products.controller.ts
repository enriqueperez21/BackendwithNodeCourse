import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly UserService: ProductsService){}
    @Get()
    getUser(@Body() body:any){
        return 
    }

    @Post()
    createUser(@Body() body:any){
        return 
    }
}
