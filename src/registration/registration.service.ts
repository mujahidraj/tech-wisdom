import { Body, Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { registrationDto } from './dto';

@Injectable()
export class RegistrationService {

    constructor(private prisma: PrismaService){}
    
    signup(dto:registrationDto){
        return 'Sign up Successful.';
    }

    signin(dto:registrationDto){
        return 'Sign in Successful';
    }

   
}
