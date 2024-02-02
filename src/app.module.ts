import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CliModule } from './framework/cli/cli.module';
import { Cli2Module } from './framework/cli2/cli2.module';

@Module({
  imports: [CliModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
