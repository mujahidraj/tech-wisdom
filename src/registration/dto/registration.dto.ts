import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class registrationDto{

    
    @IsNotEmpty()
    @IsString()
    first_name : string
    @IsNotEmpty()
    @IsString()
    last_name : string
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email     : string
    @IsString()
    @IsNotEmpty()
    username  : string
    @IsNotEmpty()
    @IsString()
    hash      : string
    @IsNotEmpty()
    @IsString()
    enrollment_status : string



}