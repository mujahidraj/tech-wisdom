import { Module } from '@nestjs/common';
import { CourseContentController } from './course_content.controller';
import { CourseContentService } from './course_content.service';

@Module({
  controllers: [CourseContentController],
  providers: [CourseContentService]
})
export class CourseContentModule {}
