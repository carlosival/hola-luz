import { Module } from '@nestjs/common';
import { CliModule } from './framework/cli/cli.module';

/* import { ParseCvsService } from './framework/parse-service/parse-cvs/parse-cvs.service.imp';
import { ParseXmlService } from './framework/parse-service/parse-xml/parse-xml.service'; */
import { ControllersModule } from './controllers/controllers.module';
import { PresentersModule } from './presenters/presenters.module';

@Module({
  imports: [CliModule, ControllersModule, PresentersModule],
  //providers: [ParseXmlService, ParseCvsService],
})
export class AppModule {}
