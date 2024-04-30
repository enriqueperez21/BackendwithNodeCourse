import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/*@Controller(/*"/app" -> Aquí se pone la ruta principal)*/
@Controller("App")
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get("data" -> Aquí se ponen las rutas secundarios)*/
  @Get("Hello")
  getHello(): string {
    return this.appService.getHello();
  }
}
