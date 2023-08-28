import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { Gender } from '../enum/user.enum';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Unique id of user',
    example: '109e1b80-a2cf-4551-9b06-8ff9f48f9ed5',
  })
  @IsString()
  @Length(2, 100)
  id: string;

  @ApiProperty({
    description: 'The name of the User',
    example: 'Tom Cruise',
  })
  @IsString()
  @Length(2, 100)
  name: string;

  @ApiProperty({
    description: 'The email address of the User',
    example: 'tom@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The mobile number of user',
    type: Number,
    example: 9876543210,
  })
  @IsNotEmpty()
  mobile: number;

  @ApiProperty({
    description: 'Date of birth of user',
    example: '1990-10-20',
  })
  @IsNotEmpty()
  dob: Date;

  @ApiProperty({
    description: 'Gender of the user',
    enum: Object.keys(Gender),
    example: 'Male',
  })
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: string;
}

export class DeleteUserDto extends PickType(UpdateUserDto, ['id']) {}
