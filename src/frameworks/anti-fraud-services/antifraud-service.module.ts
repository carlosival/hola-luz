import { Module } from '@nestjs/common';
import { IAntiFraudService } from '../../core/abstracts/anti-fraud-services';

import { AntiFraudService } from './antifraud-service.imp';

@Module({
  providers: [
    {
      provide: IAntiFraudService,
      useClass: AntiFraudService,
    },
  ],
  exports: [IAntiFraudService],
})
export class AntiFraudServiceModule {}
