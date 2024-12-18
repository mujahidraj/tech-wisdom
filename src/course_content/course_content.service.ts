import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createdto } from './dto/createcontent.dto';
import { EditcourseDto } from 'src/courses/dto';

@Injectable()
export class CourseContentService {
    constructor(private prisma:PrismaService){}
    async createCourse( dto: createdto) {
            const course = await this.prisma.course_content.create({
                data: {
                     ...dto,
                }
            })
            return course;
        }

        getcontent(id: number) {
            return this.prisma.course_content.findMany({
                where: {
                    id
                }
            })
        }

        getcontentById(id: number, course_id: number) {
            return this.prisma.course_content.findFirst({
                where: {
                    id: course_id,
                }
            })
        }

         async editcontentById(id: number, course_id: number, dto: EditcourseDto) {
                const content = await this.prisma.course_content.findUnique({
                    where: {
                        id: course_id
                    },
                });
                if (!content || content.id !== id) {
                    throw new ForbiddenException(
                        'Accesss to resources denied',
                    );
        
        
                }
                return this.prisma.course_content.update({
                    where: {
                        id: course_id,
                    },
                    data: {
                        ...dto,
                    }
                })
            }
}
