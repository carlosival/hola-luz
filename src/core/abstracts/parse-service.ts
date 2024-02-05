import { Client } from '../entities/client.entity';

export abstract class IParseFileService {
  abstract parseFile(pathFile: string): Client[];
}
