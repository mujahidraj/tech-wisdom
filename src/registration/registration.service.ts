import { Body, ForbiddenException, Injectable, Post , Get} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { registrationDto, teacherDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RegistrationService {
    

    constructor(private prisma: PrismaService ,private jwt:JwtService ,private config:ConfigService) { }

    // student sign up


    async signup_student(dto: registrationDto) {

            
         const hash = await argon.hash(dto.hash);
       try{
         
         
         const student = await this.prisma.student.create({
             data : {
                 first_name : dto.first_name,
                 last_name  : dto.last_name,
                 email      : dto.email,
                 username   : dto.username,
                 hash,   
                 enrollment_status :dto.enrollment_status
             },
         });
         
        
         return this.signToken(student.id, student.email);
        
       }
       catch(error){
        if( 
            error instanceof PrismaClientKnownRequestError
        ){
            if (error.code==='P2002'){
                throw new ForbiddenException(
                    'Hey! You are using a duplicate Username for teacher.',
                )
            }
        }
        throw error;
       }
    }


    //Teacher Signup 

    async signup_teacher(dto:teacherDto) {

        
     const hash = await argon.hash(dto.hash);
   try{
     
    
     const teacher = await this.prisma.teacher.create({
         data : {
             
                 first_name: dto.first_name,
                
                 last_name: dto.last_name,
                
                 email: dto.email,
                
                 username: dto.username,
                
                 hash,
                
                 specialization: dto.specialization
         },
     });
    
     
     return this.signToken(teacher.id, teacher.email);
    
   }
   catch(error){
    if( 
        error instanceof PrismaClientKnownRequestError
    ){
        if (error.code==='P2002'){
            throw new ForbiddenException(
                'Hey! You are using a duplicate Username.',
            )
        }
    }
    throw error;
   }


   //signintoken
        
    }
    async signToken(
        userId: number,
        email: string,
      ): Promise<{ access_token: string }> {
        const payload = {
          sub: userId,
          email,
        };
        const secret = this.config.get('JWT_SECRET');
    
        const token = await this.jwt.signAsync(
          payload,
          {
            expiresIn: '15m',
            secret: secret,
          },
        );
    
        return {
          access_token: token,
        };
      }


}
