import { Module } from '@nestjs/common';
import { ParseCvsService } from './parse-cvs.service.imp';

@Module({
  providers: [ParseCvsService],
  exports: [ParseCvsService],
})
export class ParseCVSServiceModule {}
