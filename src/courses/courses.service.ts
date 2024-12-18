import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { courseDto } from './dto/courses.dto';
import { EditcourseDto } from './dto/edit-course.dto';

@Injectable()
export class CoursesService {
    constructor(private prisma:PrismaService){}

    async createCourse(instructor_id: number, dto: courseDto) {
        const course = await this.prisma.courses.create({
            data: {
                instructor_id, ...dto,
            }
        })
        return course;
    }

    getcourses(instructor_id: number) {
        return this.prisma.courses.findMany({
            where: {
                instructor_id
            }
        })
    }

    getcourseById(instructor_id: number, course_id: number) {
        return this.prisma.courses.findFirst({
            where: {
                id: course_id,
                instructor_id,
            }
        })
    }

    async editcourseById(instructor_id: number, course_id: number, dto: EditcourseDto) {
        const bookmark = await this.prisma.courses.findUnique({
            where: {
                id: course_id
            },
        });
        if (!bookmark || bookmark.instructor_id !== instructor_id) {
            throw new ForbiddenException(
                'Accesss to resources denied',
            );


        }
        return this.prisma.courses.update({
            where: {
                id: course_id,
            },
            data: {
                ...dto,
            }
        })
    }

}
