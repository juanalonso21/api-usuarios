import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Get()
  getUsuarios(): any {
    return this.usuariosService.getUsuarios();
  }
  @Get('new')
  getNuevoUsuario(): any {
    return this.usuariosService.new();}
  @Post('nuevo')
  postNuevoUsuario(@Body() usuario: any): any {
    console.log(usuario);
    this.usuariosService.nuevo(usuario);
    return ('Usuario creado correctamente');
  }
}
