import { IsNumber, IsString } from "class-validator";

export class CreateEmailDto {
    @IsString()
    nombre:string;
    @IsString()
    apellido:string;
    @IsNumber()
    telefono:number;
    @IsString()
    email:string;
    @IsString()
    fecha:string;
    @IsNumber()
    cantidad:number;
}