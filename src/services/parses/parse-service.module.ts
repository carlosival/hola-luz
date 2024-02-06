import { Module } from '@nestjs/common';
import { ParseFactoryModule } from '../../framework/parse-service/parse-factory/parse-factory.module';

@Module({
  imports: [ParseFactoryModule],
  exports: [ParseFactoryModule],
})
export class ParseServiceModule {}
