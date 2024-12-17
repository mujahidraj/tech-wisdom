import { Module } from '@nestjs/common';
import { SigninController } from './signin.controller';
import { SigninService } from './signin.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegistrationService } from 'src/registration/registration.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/registration/strategy';


@Module({
  imports : [JwtModule.register({})],
  controllers: [SigninController],
  providers: [SigninService,RegistrationService,JwtStrategy]
})
export class SigninModule {}
