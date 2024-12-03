import { Controller, Post, Body, UsePipes, ValidationPipe, } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() createEmailDto: CreateEmailDto) {
    console.log("Hola")
    //return this.emailService.sendEmail();
  }
}
