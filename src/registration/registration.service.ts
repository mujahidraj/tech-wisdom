import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class RegistrationService {
    
    signup(){
        return 'Sign up Successful.';
    }

    signin(){
        return 'Sign in Successful';
    }

   
}
