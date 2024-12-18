import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/registration/guard';
import { CoursesService } from './courses.service';
import { GetUser } from 'src/signin/decorator';
import { courseDto, EditcourseDto } from './dto';

@UseGuards(JwtGuard)
@Controller('courses')
export class CoursesController {
    constructor(private courseService: CoursesService){}

    @Get()
    getCourse(@GetUser('id') instructor_id: number) {
        return this.courseService.getcourses(
            instructor_id,
        )
    }

    @Post()
    createcourse(@GetUser('id') instructor_id: number, @Body() dto: courseDto) {
        return this.courseService.createCourse(
            instructor_id,
            dto
        )
    }

    @Get(':id')
    getcourseById(@GetUser('id') instructor_id: number, @Param('id', ParseIntPipe) course_id: number) {
        return this.courseService.getcourseById(
            instructor_id,
            course_id
            
        )
    }


    @Patch(':id')
    editcourseById(@GetUser('id') instructor_id: number, @Param('id', ParseIntPipe) course_id: number, @Body() dto: EditcourseDto) {
        return this.courseService.editcourseById(
            instructor_id,
            course_id,
            dto
        )
    }
}
