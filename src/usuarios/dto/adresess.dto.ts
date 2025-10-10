import { IsString, IsOptional, IsPostalCode, Length } from 'class-validator';

export class AddressDto {
    @IsString()
    @Length(5, 100)
    calle: string;
    @IsString()
    @Length(2, 50)
    ciudad: string;

    @IsString()
    @Length(2, 50)
    pais: string;
}