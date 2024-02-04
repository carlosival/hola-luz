import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ClientDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  readings: Reading[];
}

class Reading {
  @IsString()
  @IsNotEmpty()
  period: string;

  @IsNumber()
  @IsNotEmpty()
  reading: number[];
}
