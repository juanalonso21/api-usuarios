import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 50})
    name: string;
    @Column({})
    edad: number;
    @Column({ length: 100})
    email: string;
    @Column({ length: 9, unique: true})
    nif: string;
    @OneToOne(
        () => Cliente,
        (cliente) => cliente.usuario
    ) 
    @JoinColumn()
    cliente: Cliente;
}


