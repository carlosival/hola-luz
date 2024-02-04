import { Module } from '@nestjs/common';
import { CliModule } from './framework/cli/cli.module';

/* import { ParseCvsService } from './framework/parse-service/parse-cvs/parse-cvs.service.imp';
import { ParseXmlService } from './framework/parse-service/parse-xml/parse-xml.service'; */

@Module({
  imports: [CliModule],
  //providers: [ParseXmlService, ParseCvsService],
})
export class AppModule {}
