import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: 'silsaconsultores88@gmail.com',//emisor
    pass: 'mqgh odnm pths weby',
  },
});

@Injectable()
export class EmailService {
  async sendEmail(dataEmail:CreateEmailDto) {
    const info = await transporter.sendMail({
      from: 'Prueba',
      to: 'hernandezsanchezgerman25@gmail.com',//receptor
      subject: 'Hola',
      text: 'Hola german',
      html: `<ul>
      <li>El nombre es ${dataEmail.nombre} ${dataEmail.apellido}</li>
      <li>El telefono es ${dataEmail.telefono}</li>
      <li>El email es ${dataEmail.email}</li>
      <li>La fecha es ${dataEmail.fecha}</li>
      <li>La cantidad de invitados es ${dataEmail.cantidad}</li>
      </ul>`,
    });

    console.log('Message sent: %s', info.messageId);
  }
}
