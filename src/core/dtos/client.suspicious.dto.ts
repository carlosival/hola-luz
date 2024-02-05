import { IsString, IsNotEmpty } from 'class-validator';

export class ClientSuspiciousDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  month: string;

  @IsNotEmpty()
  suspicious: number;

  @IsNotEmpty()
  median: number;
}
