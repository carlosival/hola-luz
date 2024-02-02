import { Module } from '@nestjs/common';
import { ImportCommand } from './import.command';

@Module({
  providers: [ImportCommand],
})
export class CliModule {}
