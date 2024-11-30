import { IsNumber, IsString } from "class-validator";

export class CreateParameterDto {
    @IsString()
    h2o:string;
    @IsNumber()
    humedad:string;
}
