import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import IUsuario from './interfaces/IUsuario';
import CreateUserDto from './dto/createUser.dto';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Get()
  getUsuarios(): Promise<IUsuario[]> {
    return this.usuariosService.getUsuarios();
  }
  @Get('new')
  getNuevoUsuario(): any {
    return this.usuariosService.new();}
  @Post('nuevo')
  postNuevoUsuario(@Body() usuarioDTO: CreateUserDto): any {
    this.usuariosService.nuevo(usuarioDTO);
    return ('Usuario creado correctamente');
  }
}
