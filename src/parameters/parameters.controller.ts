import { Controller, Get, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { CreateParameterDto } from './dto/create-parameter.dto';

@Controller('parameters')
export class ParametersController {
  constructor(private readonly parametersService: ParametersService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() createParameterDto: CreateParameterDto) {
    return this.parametersService.changeValueSensor(createParameterDto);
  }

  @Get()
  findAll() {
    return this.parametersService.getParameters();
  }
}
