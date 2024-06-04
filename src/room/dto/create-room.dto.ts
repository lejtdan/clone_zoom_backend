import { IsString, MinLength } from "class-validator"

export class CreateRoomDto {

    @IsString()
    @MinLength(6)
    code: string

    // @IsString()
    // time: string

    // @IsString()
    // day: string

    // @IsString()
    // hour: string

}
