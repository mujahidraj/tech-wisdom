import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { registrationDto } from './dto';
import * as argon from 'argon2';

@Controller('registration')
export class RegistrationController {
    constructor(private registrationService : RegistrationService){}

    @Post('signin')
    signin(@Body() dto : registrationDto){
        
        return this.registrationService.signin(dto);
    }

    @Post('signup')
    signup(@Body() dto:registrationDto){
        return this.registrationService.signup(dto);
    }
}
