import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Parameter } from './entities/parameter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParametersService {
  constructor(@InjectRepository(Parameter)private readonly parametersRepository:Repository<Parameter>){}
  async changeValueSensor(createParameterDto: CreateParameterDto) {
    try {
      const foundParameter = await this.parametersRepository.findOne({
        where:{
          id:1
        }
      });

      if(foundParameter){
        this.parametersRepository.update(foundParameter.id,createParameterDto);
        return{
          status:HttpStatus.OK,
          message: 'Parametros actualizados'
        }
      }
      else{
        return{
          status:HttpStatus.NOT_FOUND,
          message: 'No se encontró el parámetro'
        }
      }
    } catch (error) {
      throw new HttpException("A ocurrido un error",HttpStatus.BAD_GATEWAY);
    }
  }

  findAll() {
    return `This action returns all parameters`;
  }
}
