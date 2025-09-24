import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('bye')
  getBye(): string {
    return 'Adiós mundo!';
  }
  @Get('users')
  getUsers(): any {
    return { name: 'Juan', age: 30};
  }
  @Get('nuevoUsuario')
  getNuevoUsuario(): any {
    return ('Usuario creado correctamente');
  }
  @Get('eliminarUsuario')
  getEliminarUsuario(): any {
    return ('Usuario eliminado correctamente');
  }
  @Get('modificarUsuario')
  getModificarUsuario(): any {
    return ('Usuario modificado correctamente');
  }
}
