import { Body, ForbiddenException, Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { registrationDto, teacherDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class RegistrationService {

    constructor(private prisma: PrismaService) { }

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
         delete student.hash;
        
         return student;
        
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
     delete teacher.hash;
     
     return teacher;
    
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
    

    // student signin


  async  signin_student(dto: registrationDto) {

    const student = await this.prisma.student.findUnique({
        where :  {
            username : dto.username,
        },
    });
    if(!student){
        throw new ForbiddenException(
            'Username Does not Matched.Please Try again.'
        );
    }

    const passwordMatch = await argon.verify(
        student.hash,
        dto.hash,
    )

    if(!passwordMatch){
        throw new ForbiddenException(
            'Password does not matched. Please try again'
        );
    }
        delete student.hash;
        return student;


       
    }


}
