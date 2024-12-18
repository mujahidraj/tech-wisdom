import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class editdto{

    @IsNotEmpty()
    @IsString()
    course_id :number

    @IsOptional()
    @IsString()
    title : string

    @IsOptional()
    @IsString()
    url : string

    @IsOptional()
    @IsString()
    time : string
}