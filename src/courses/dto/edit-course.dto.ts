import { IsNotEmpty, isNumber, IsOptional, IsString } from "class-validator"

export class EditcourseDto{


    
    
    @IsString()
    @IsOptional()
    title        : string
    
    @IsString()
    @IsOptional()
    description  :string

    @IsOptional()
    @IsString()
    price        :string

    @IsOptional()
    instructor_id :number
  
  
    @IsOptional()
    @IsString()
    time           :string


}