
import { Body, ForbiddenException, Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { registrationDto } from 'src/registration/dto';
import { signinDto, teachersigninDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SigninService {
    constructor(private prisma: PrismaService,private jwt:JwtService,private config:ConfigService) { }

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
        return this.signToken(student.id, student.email);



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
        return this.signToken(teacher.id, teacher.email); 



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






