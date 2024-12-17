import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './registration/registration.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { SigninModule } from './signin/signin.module';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './registration/strategy';

import { TeacherModule } from './teacher/teacher.module';


@Module({

  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), RegistrationModule, PrismaModule, SigninModule, TeacherModule],
})
export class AppModule { }
