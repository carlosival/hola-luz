import { Module } from '@nestjs/common';
import { IClientUseCasesOUT } from '../../core/abstracts/client.use-cases';
import { PresentationService } from './presentation.service.imp';

@Module({
  providers: [
    {
      provide: IClientUseCasesOUT,
      useClass: PresentationService,
    },
  ],
  exports: [IClientUseCasesOUT],
})
export class PresentationServiceModule {}
