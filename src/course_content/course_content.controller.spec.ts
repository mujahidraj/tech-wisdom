import { Test, TestingModule } from '@nestjs/testing';
import { CourseContentController } from './course_content.controller';

describe('CourseContentController', () => {
  let controller: CourseContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseContentController],
    }).compile();

    controller = module.get<CourseContentController>(CourseContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
