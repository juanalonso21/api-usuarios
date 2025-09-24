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
}
