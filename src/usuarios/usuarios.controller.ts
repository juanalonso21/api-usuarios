import { Controller, Get } from '@nestjs/common';
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
    return ('Usuario creado correctamente');
  }
}
