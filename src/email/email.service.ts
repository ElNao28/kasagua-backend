import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: 'silsaconsultores88@gmail.com',
    pass: 'mqgh odnm pths weby',
  },
});

@Injectable()
export class EmailService {
  async sendEmail() {
    const info = await transporter.sendMail({
      from: 'Prueba',
      to: 'naopubg28@gmail.com',
      subject: 'Hello ✔',
      text: 'Hello world?',
      html: '<b>Hello world?</b>',
    });

    console.log('Message sent: %s', info.messageId);
  }
}
