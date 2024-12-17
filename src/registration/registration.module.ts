import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  imports :[PrismaModule],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
