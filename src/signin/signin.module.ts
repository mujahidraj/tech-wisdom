import { Module } from '@nestjs/common';
import { SigninController } from './signin.controller';
import { SigninService } from './signin.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistrationService } from 'src/registration/registration.service';

@Module({
  
  controllers: [SigninController],
  providers: [SigninService,RegistrationService]
})
export class SigninModule {}
