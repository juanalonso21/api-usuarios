import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class createAdressDto {
    @MinLength(3)
    @MaxLength(20)
    @IsString()
    pais: string;
    @IsString()
    ciudad: string;
    @IsString()
    calle: string;
    @IsNumber()
    codigo_postal: number;
}