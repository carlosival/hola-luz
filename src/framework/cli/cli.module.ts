import { Module } from '@nestjs/common';
import { ImportCommand } from './import.command';
import { CsvModule } from 'nest-csv-parser';

@Module({
  imports: [CsvModule],
  providers: [ImportCommand],
})
export class CliModule {}
