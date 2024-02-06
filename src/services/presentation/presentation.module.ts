import { Module } from '@nestjs/common';
import { PresentationServiceModule } from '../../framework/presentation-service/presentation.service.module';

@Module({
  imports: [PresentationServiceModule],
  exports: [PresentationServiceModule],
})
export class PresentationModule {}
