import { Type } from "class-transformer";
import { IsNumber, IsString, ValidateNested } from "class-validator";
import { createAdressDto } from "../../../common/dto/createAddress.dto";
export class CreateClienteDto {
    @IsString()
    nif: string;
    @IsString()
    nombre: string;
    @IsNumber()
    edad: number;
    @ValidateNested()
    @Type(() => createAdressDto)
    address: createAdressDto;
}
