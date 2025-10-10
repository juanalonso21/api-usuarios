import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import {IUsuario} from './interfaces/IUsuario';
import CreateUserDto from './dto/createUser.dto';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Get()
  getUsuarios(): Promise<IUsuario[]> {
    return this.usuariosService.getUsuarios();
  }

  @Post('nuevo')
  postNuevoUsuario(@Body() usuarioDTO: CreateUserDto): any {
    this.usuariosService.nuevo(usuarioDTO);
    return ('Usuario creado correctamente');
  }
  @Get(':id')
  getUsuarioById(@Param('id') id: string): Promise<IUsuario | any> {
    return this.usuariosService.findOne(Number(id));
  }
}
