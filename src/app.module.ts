import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParametersModule } from './parameters/parameters.module';

@Module({
  imports: [ParametersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
