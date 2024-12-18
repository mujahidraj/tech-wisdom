import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CoursesService } from 'src/courses/courses.service';
import { JwtGuard } from 'src/registration/guard';
import { GetUser } from 'src/signin/decorator';
import { createdto } from './dto/createcontent.dto';
import { editdto } from './dto/edit-content.dto';

@UseGuards(JwtGuard)
@Controller('course-content')
export class CourseContentController {
    CourseContentService: any;
    constructor(private courseService : CoursesService){}

    
        @Get()
        getCourse(@GetUser('id') id: number) {
            return this.CourseContentService.getcourses(
                id,
            )
        }

        
            @Post()
            createcourse(@GetUser('id') instructor_id: number, @Body() dto: createdto) {
                return this.CourseContentService.createCourse(
                    instructor_id,
                    dto
                )
            }

             @Get(':id')
                getcourseById(@GetUser('id') instructor_id: number, @Param('id', ParseIntPipe) course_id: number) {
                    return this.CourseContentService.getcourseById(
                        instructor_id,
                        course_id
                        
                    )
                }

                 @Patch(':id')
                    editcourseById(@GetUser('id') instructor_id: number, @Param('id', ParseIntPipe) course_id: number, @Body() dto: editdto) {
                        return this.CourseContentService.editcourseById(
                            instructor_id,
                            course_id,
                            dto
                        )
                    }
}
