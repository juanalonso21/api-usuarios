import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
@Injectable()
export class UsuariosService {
    private db: Low<any>;
    constructor() {
        const adapter = new JSONFile('common/db/db.json');
        this.db = new Low(adapter, { users: [] });
    }
    async getUsuarios(): Promise<any> {
         await this.db.read();
         return this.db.data.users;
    }
    async  new() {
    const usuario = { id: 3, name: 'Pedro', email: 'espacio@gmail.com' };
    await this.db.read();
    this.db.data.users.push(usuario);
    console.log(this.db.data);
    this.db.write();
    return usuario;
  }
  async nuevo(user: any) {
    await this.db.read();
    this.db.data.users.push(user);
    console.log(this.db.data);
    this.db.write();
    return user;
  }

}
