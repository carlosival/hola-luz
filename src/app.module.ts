import { Module } from '@nestjs/common';
import { CliModule } from './framework/cli/cli.module';

@Module({
  imports: [CliModule],
})
export class AppModule {}
