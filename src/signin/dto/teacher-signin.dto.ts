import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class teachersigninDto {

    @IsString()
    @IsNotEmpty()
    username: string
    @IsNotEmpty()
    @IsString()
    hash: string
  



}