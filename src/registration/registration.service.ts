import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegistrationService {

    constructor(private prisma: PrismaService){}
    
    signup(){
        return 'Sign up Successful.';
    }

    signin(){
        return 'Sign in Successful';
    }

   
}
