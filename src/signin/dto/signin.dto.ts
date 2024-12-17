import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class signinDto{
     
        @IsString()
        @IsNotEmpty()
        username  : string
        @IsNotEmpty()
        @IsString()
        hash      : string
       
}