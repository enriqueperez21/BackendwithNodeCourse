import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService){}

    @Get()
    getUser(@Body() body:any){
        return this.UserService.getUserData(body)
    }

    @Post()
    createUser(@Body() body:any){
        return this.UserService.createUser(body)
    }

}
