import { IsNotEmpty, isNumber, IsString } from "class-validator"

export class courseDto{


    @IsNotEmpty()
    id           : number
    
    @IsString()
    @IsNotEmpty()
    title        : string
    
    @IsString()
    @IsNotEmpty()
    description  :string

    @IsNotEmpty()
    @IsString()
    price        :string

    @IsNotEmpty()
    instructor_id :number
  
  
    @IsNotEmpty()
    @IsString()
    time           :string


}