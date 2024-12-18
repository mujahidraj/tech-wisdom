import { IsNotEmpty, IsString } from "class-validator"

export class createdto{

    @IsNotEmpty()
    @IsString()
    course_id :number

    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    url : string

    @IsNotEmpty()
    @IsString()
    time : string
}