import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class teacherDto {

    @IsNotEmpty()
    @IsString()
    first_name: string
    @IsNotEmpty()
    @IsString()
    last_name: string
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string
    @IsString()
    @IsNotEmpty()
    username: string
    @IsNotEmpty()
    @IsString()
    hash: string
    @IsNotEmpty()
    @IsString()
    specialization: string



}