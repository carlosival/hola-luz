import { Injectable } from '@nestjs/common';
import { IParseFileFactory } from '../../../core/abstracts/parse-factory';
import { IParseFileService } from '../../../core/abstracts/parse-service';
import { ParseCvsService } from '../parse-cvs/parse-cvs.service.imp';
import { ParseXmlService } from '../parse-xml/parse-xml.service.imp';

@Injectable()
export class ParseFactory implements IParseFileFactory {
  constructor(
    private parseCvsService: ParseCvsService,
    private parseXmlService: ParseXmlService,
  ) {}
  public getParseFile(filePath: string): IParseFileService {
    const ext = this.getExtension(filePath);

    switch (ext) {
      case 'csv':
        return this.parseCvsService;
      case 'xml':
        return this.parseXmlService;

      default:
        return null;
    }
  }

  private getExtension(filename: string) {
    return filename.split('.').pop();
  }
}
