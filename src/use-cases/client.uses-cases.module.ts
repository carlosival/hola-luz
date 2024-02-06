import { Module } from '@nestjs/common';
import { IClientUseCasesIN } from '../core/abstracts/client.use-cases';
import { ClientUseCases } from './client.use-cases';
import { AntiFraudModule } from '../services/anti-fraud/anti-fraud.module';
import { ParseServiceModule } from '../services/parses/parse-service.module';
import { PresentationModule } from '../services/presentation/presentation.module';

@Module({
  imports: [AntiFraudModule, ParseServiceModule, PresentationModule],
  providers: [
    {
      provide: IClientUseCasesIN,
      useClass: ClientUseCases,
    },
  ],
  exports: [IClientUseCasesIN],
})
export class ClientUsesCasesModule {}
