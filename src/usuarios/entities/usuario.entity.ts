import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('usuarios')
export class Usuario {
    @PrimaryColumn()
    id: number;
    @Column({ length: 50})
    name: string;
    @Column({})
    edad: number;
    @Column({ length: 100})
    email: string;
    @Column({ length: 9, unique: true})
    nif: string;
}