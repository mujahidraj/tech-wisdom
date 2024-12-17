import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';


@Module({
  imports :[PrismaModule,JwtModule.register({})],
  controllers: [RegistrationController],
  providers: [RegistrationService,JwtStrategy]
})
export class RegistrationModule {}
