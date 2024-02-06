import { Module } from '@nestjs/common';
import { ImportCommand } from './import.command';
import { ClientUsesCasesModule } from '../../use-cases/client.uses-cases.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [ClientUsesCasesModule, EventEmitterModule.forRoot()],
  providers: [ImportCommand],
})
export class CliModule {}
