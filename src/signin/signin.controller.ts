import { Body, Controller, Post } from '@nestjs/common';
import { registrationDto } from 'src/registration/dto';
import { RegistrationService } from 'src/registration/registration.service';
import { signinDto, teachersigninDto } from './dto';
import { SigninService } from './signin.service';

@Controller('signin')
export class SigninController {
    constructor(private signinService : SigninService){}
    
        @Post('signin_student')
        signin_student(@Body() dto : signinDto){
            
            return this.signinService.signin_student(dto);
        }

        @Post('signin_teacher')
        signin_teacher(@Body() dto:teachersigninDto){

            return this.signinService.signin_teacher(dto);
        }
}
