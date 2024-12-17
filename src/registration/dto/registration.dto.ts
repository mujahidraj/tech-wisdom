import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class registrationDto{

    
    @IsNotEmpty()
    @IsString()
    first_name : String
    @IsNotEmpty()
    @IsString()
    last_name : String
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email     : String
    @IsString()
    @IsNotEmpty()
    username  : String
    @IsNotEmpty()
    @IsString()
    hash      : String
    @IsNotEmpty()
    @IsString()
    enrollment_status : String



}