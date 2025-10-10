import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { IUsuario, IResponse } from './interfaces/IUsuario';
type Data = { users: IUsuario[] };
@Injectable()
export class UsuariosService {
    private db: Low<Data>;
    constructor() {
        const adapter = new JSONFile<Data>('common/db/db.json');
        this.db = new Low<Data>(adapter, { users: [] });
    }
    async getUsuarios(): Promise<IUsuario[]> {
         await this.db.read();
         return this.db.data.users;
    }

  async nuevo(user: IUsuario): Promise<IResponse> {
    await this.db.read();
    this.db.data.users.push(user);
    console.log(this.db.data);
    this.db.write();
    return { status: 201, message: 'Usuario creado', data: user };
  }
  async findOne(id: number): Promise<IUsuario | IResponse> {
    await this.db.read();
    const user = this.db.data.users.find((u) => u.id === id);
    if (user) {
      return user;
    } else {
      return { status: 404, message: 'Usuario no encontrado', data: null };
    }
  }
}
