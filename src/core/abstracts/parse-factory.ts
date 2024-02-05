import { IParseFileService } from './parse-service';

export abstract class IParseFileFactory {
  abstract getParseFile(fileExt: string): IParseFileService;
}
