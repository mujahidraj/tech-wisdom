import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { registrationDto, teacherDto } from './dto';
import * as argon from 'argon2';

@Controller('registration')
export class RegistrationController {
    constructor(private registrationService : RegistrationService){}

    @Post('signin_student')
    signin_student(@Body() dto : registrationDto){
        
        return this.registrationService.signin_student(dto);
    }

    @Post('signup_student')
    signup_student(@Body() dto:registrationDto){
        return this.registrationService.signup_student(dto);
    }

    @Post('signup_teacher')
    signup_teacher(@Body() dto:teacherDto){
        return this.registrationService.signup_teacher(dto);
    }

    @Post('signin_teacher')
    signin_teacher(@Body() dto : registrationDto){
        
        return this.registrationService.signin_student(dto);
    }

}
