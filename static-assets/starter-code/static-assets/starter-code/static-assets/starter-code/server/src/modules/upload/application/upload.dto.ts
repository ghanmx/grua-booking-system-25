import { IsNotEmpty, IsString } from 'class-validator'

export class UploadFromPrivateToPublicDto {
  @IsString()
  @IsNotEmpty()
  url: string

  @IsString()
  @IsNotEmpty()
  fileKey: string
}
