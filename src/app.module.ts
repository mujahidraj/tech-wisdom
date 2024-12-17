import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './registration/registration.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  
  controllers: [AppController],
  providers: [AppService , PrismaService],
  imports: [RegistrationModule, PrismaModule],
})
export class AppModule {}
