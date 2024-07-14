import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class PasswordHistoryCreateDto {
  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  @IsOptional()
  dateChanged?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string

  @IsString()
  @IsOptional()
  userId?: string
}

export class PasswordHistoryUpdateDto {
  @IsString()
  @IsOptional()
  password?: string

  @IsString()
  @IsOptional()
  dateChanged?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string

  @IsString()
  @IsOptional()
  userId?: string
}
