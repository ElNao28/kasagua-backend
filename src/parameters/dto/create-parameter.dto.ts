import { IsString } from "class-validator";

export class CreateParameterDto {
    @IsString()
    ph:string;
    @IsString()
    temperatura:string;
}
