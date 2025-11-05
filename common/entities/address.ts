import {Column} from 'typeorm';
export class Address {
    @Column({length: 100})
    pais: string;
    @Column({length: 100})
    ciudad: string;
    @Column({length: 100})
    calle: string;
    @Column()
    codigo_postal: number;
} 