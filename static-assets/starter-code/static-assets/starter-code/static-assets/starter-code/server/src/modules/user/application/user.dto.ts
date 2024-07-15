import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UserCreateDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsOptional()
  @IsString()
  pictureUrl: string

  @IsOptional()
  lastLogin?: string

  @IsNotEmpty()
  isActive: boolean

  @IsNotEmpty()
  isVerified: boolean
}

export class UserUpdateDto {
  @IsEmail()
  @IsOptional()
  email?: string

  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  pictureUrl?: string

  @IsString()
  lastLogin?: string

  isActive?: boolean

  isVerified?: boolean
}
