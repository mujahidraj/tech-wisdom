import { Body, ForbiddenException, Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { registrationDto, teacherDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class RegistrationService {

    constructor(private prisma: PrismaService) { }

    async signup_student(dto: registrationDto) {

            //generate the password
         const hash = await argon.hash(dto.hash);
       try{
         
         //insert the user in the database
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
         delete student.hash;
         //return user from the database
         return student;
        //return 'Sign up Successful.';
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
    }


    //Teacher Signup 

    async signup_teacher(dto:teacherDto) {

        //generate the password
     const hash = await argon.hash(dto.hash);
   try{
     
     //insert the user in the database
     const teacher = await this.prisma.teacher.create({
         data : {
             
                 first_name: dto.first_name,
                
                 last_name: dto.last_name,
                
                 email: dto.email,
                
                 username: dto.username,
                
                 hash: dto.hash,
                
                 specialization: dto.specialization
         },
     });
     delete teacher.hash;
     //return user from the database
     return teacher;
    //return 'Sign up Successful.';
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
}
    

    signin_student(dto: registrationDto) {
        return 'Sign in Successful';
    }


}
