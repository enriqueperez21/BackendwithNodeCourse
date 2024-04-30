import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { parse } from 'path';
import { cart } from './interface';

const prisma = new PrismaClient()
@Injectable()
export class UserService {
    async getUserData(body:any){
        const id = body.id
        const userData = await prisma.user.findUnique({
            where: {id: id}
        })
        return userData
    }

    async createUser(body:any){
        
        const userData = await prisma.user.create({
            data: body
        })

        const cart = await prisma.cart.create({
            data: {
                userId: userData.id
            }
        })

        return userData
    }
}
