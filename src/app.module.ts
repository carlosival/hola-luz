import { Module } from '@nestjs/common';
import { CliModule } from './framework/cli/cli.module';

import { EventEmitterModule } from '@nestjs/event-emitter';
import { AntiFraudModule } from './services/anti-fraud/anti-fraud.module';
import { ParseServiceModule } from './services/parses/parse-service.module';
import { PresentationModule } from './services/presentation/presentation.module';

@Module({
  imports: [
    CliModule,
    EventEmitterModule,
    AntiFraudModule,
    ParseServiceModule,
    PresentationModule,
  ],
})
export class AppModule {}
