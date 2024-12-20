import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaController } from './prisma.controller';

@Global()
@Module({
  exports :  [PrismaService],
  providers: [PrismaService],
  controllers: [PrismaController]
})
export class PrismaModule {}
