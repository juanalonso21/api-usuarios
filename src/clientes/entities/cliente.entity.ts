import { Column, Entity, JoinColumn, PrimaryColumn } from 'typeorm';
import { OneToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
@Entity('clientes')
export class Cliente {
    @PrimaryColumn()
    nif: string;

    @Column({ length: 50 })
    nombre: string;

    @Column()
    edad: number;
    @OneToOne(
        () => Usuario,
        (usuario) => usuario.cliente
        
    ) 
    usuario: Usuario;
}
