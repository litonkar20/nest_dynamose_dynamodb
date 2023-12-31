import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { Gender } from '../enum/user.enum';

export class CreateUserDto {
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
    example: 9876543210,
  })
  @IsNotEmpty()
  mobile: number;

  @ApiProperty({
    description: 'The date of birth of the user',
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
