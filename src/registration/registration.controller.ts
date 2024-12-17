import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { registrationDto, teacherDto } from './dto';
import * as argon from 'argon2';

@Controller('registration')
export class RegistrationController {
    constructor(private registrationService : RegistrationService){}

   
    @Post('signup_student')
    signup_student(@Body() dto:registrationDto){
        return this.registrationService.signup_student(dto);
    }

    @Post('signup_teacher')
    signup_teacher(@Body() dto:teacherDto){
        return this.registrationService.signup_teacher(dto);
    }

   

}
