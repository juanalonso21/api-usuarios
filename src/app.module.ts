import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientesModule } from './clientes/clientes.module';
import { SeedModule } from './seed/seed.module';

@Module({  
  imports: [
    UsuariosModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '31.220.93.25',
      port: 5435,
      username: process.env.DB_USER || 'usuario',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'usuarios_db',
      autoLoadEntities: true,
      synchronize: true
    }),
    ClientesModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
