import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ClientDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  period: string;

  @IsNumber()
  @IsNotEmpty()
  reading: number;

  @IsNumber()
  @IsNotEmpty()
  median: number;
}