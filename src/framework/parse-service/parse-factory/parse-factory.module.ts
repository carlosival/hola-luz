import { Module } from '@nestjs/common';
import { IParseFileFactory } from '../../../core/abstracts/parse-factory';
import { ParseFactory } from './parse-factory.imp';
import { ParseCVSServiceModule } from '../parse-cvs/parse-cvs-service.module';
import { ParseXmlModule } from '../parse-xml/parse.xml.module';

@Module({
  imports: [ParseCVSServiceModule, ParseXmlModule],
  providers: [
    {
      provide: IParseFileFactory,
      useClass: ParseFactory,
    },
  ],
  exports: [IParseFileFactory],
})
export class ParseFactoryModule {}
