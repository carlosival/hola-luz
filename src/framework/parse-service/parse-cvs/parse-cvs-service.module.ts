import { Module } from '@nestjs/common';
import { IParseCVSService } from '../../core/abstracts/';

import { ParseCvsService } from './parse-cvs.service.imp';

@Module({
  providers: [
    {
      provide: IParseCvsService,
      useClass: ParseCvsService,
    },
  ],
  exports: [IParseCvsService],
})
export class ParseCVSServiceModule {}