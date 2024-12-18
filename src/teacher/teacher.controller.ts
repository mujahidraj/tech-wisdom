import { Controller } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('teacher')
export class TeacherController {
    constructor(private prisma:PrismaService){}
    
}
