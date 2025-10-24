import { IsNumber, IsString, Min, Max, IsEmail, IsOptional, MinLength, MaxLength, IsArray, Matches, IsUUID, ValidateNested } from "class-validator";
import { AddressDto } from "./adresess.dto";
import { Type } from "class-transformer";
export default class CreateUserDto {
    // Para los roles lo mejor es hacer una tabla aparte y relacionarla
    // @IsUUID() // Son 32 caracteres hexadecimales con 4 guiones
    @IsNumber() // Funcion para validar que es un número

    id: number;
    @IsOptional() // El campo es opcional
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' }) // Validar longitud mínima
    @MaxLength(50, { message: 'El nombre debe tener como máximo 50 caracteres' }) // Validar longitud máxima
    @IsString() // Funcion para validar que es un string
    name: string;
    @IsEmail() // Funcion para validar que es un string
    email: string;
    @IsNumber() // Debe ser mayor de edad
    @Min(18, { message: 'La edad debe ser mayor de 18 años' })
    @Max(100, { message: 'La edad debe ser menor de 100 años' })
    edad: number;
    @IsOptional() // El campo es opcional
    @IsString({ each: true }) // Validar que cada elemento del array es un string

    @IsString() // Funcion para validar que es un string
    @Matches(/^[0-9]{8}[A-Za-z]$/, { message: 'El NIF debe tener 8 números seguidos de una letra' }) // Validar formato de NIF
    nif: string;
}
