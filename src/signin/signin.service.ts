
import { Body, ForbiddenException, Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { registrationDto } from 'src/registration/dto';
import { signinDto, teachersigninDto } from './dto';

@Injectable()
export class SigninService {
    constructor(private prisma: PrismaService) { }

    // student signin


    async signin_student(dto: signinDto) {

        const student = await this.prisma.student.findUnique({
            where: {
                username: dto.username,
            },
        });
        if (!student) {
            throw new ForbiddenException(
                'Username Does not Matched.Please Try again.'
            );
        }

        const passwordMatch = await argon.verify(
            student.hash,
            dto.hash,
        )

        if (!passwordMatch) {
            throw new ForbiddenException(
                'Password does not matched. Please try again'
            );
        }
        delete student.hash;
        return student;



    }




    // teacher sign in 





    async signin_teacher(dto:teachersigninDto) {

        const teacher = await this.prisma.teacher.findUnique({
            where: {
                username: dto.username,
            },
        });
        if (!teacher) {
            throw new ForbiddenException(
                'Username Does not Matched.Please Try again.'
            );
        }

        const pMatch = await argon.verify(
            teacher.hash,
            dto.hash
        )

        if (!pMatch) {
            throw new ForbiddenException(
                'Password does not matched. Please try again'
            );
        }
        delete teacher.hash;
        return teacher;



    }

}






