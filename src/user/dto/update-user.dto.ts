import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

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
    example: 9876543210,
  })
  @IsNotEmpty()
  mobile: number;

  @ApiProperty({
    description: 'The mobile number of user',
    example: '1990-10-20',
  })
  @IsNotEmpty()
  dob: Date;

  @ApiProperty({
    description: 'The mobile number of user',
    example: 'Male',
  })
  @IsNotEmpty()
  gender: string;
}

export class DeleteUserDto {
  @ApiProperty({
    description: 'Unique id of user',
    example: '109e1b80-a2cf-4551-9b06-8ff9f48f9ed5',
  })
  @IsString()
  @Length(2, 100)
  id: string;
}

export class GetUserDto {
  @ApiProperty({
    description: 'Unique id of user',
    example: '6091df1f-b997-4aa4-801d-2f3d70e36de7',
  })
  //@IsString()
  id: string;
}
