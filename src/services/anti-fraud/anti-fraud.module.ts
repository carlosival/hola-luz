import { Module } from '@nestjs/common';
import { AntiFraudServiceModule } from '../../framework/anti-fraud-services/antifraud-service.module';

@Module({
  imports: [AntiFraudServiceModule],
  exports: [AntiFraudServiceModule],
})
export class AntiFraudModule {}
