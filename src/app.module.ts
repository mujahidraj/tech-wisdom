import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './registration/registration.module';


@Module({
  
  controllers: [AppController],
  providers: [AppService],
  imports: [RegistrationModule],
})
export class AppModule {}
