import { Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
    constructor(private registrationService : RegistrationService){}

    @Post('signin')
    signin(){
        return this.registrationService.signin();
    }

    @Post('signup')
    signup(){
        return this.registrationService.signup();
    }
}
