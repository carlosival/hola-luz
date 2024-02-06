import { Module } from '@nestjs/common';
import { ParseXmlService } from './parse-xml.service.imp';

@Module({
  providers: [ParseXmlService],
  exports: [ParseXmlService],
})
export class ParseXmlModule {}
