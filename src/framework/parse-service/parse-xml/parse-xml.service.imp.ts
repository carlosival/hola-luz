import { Injectable } from '@nestjs/common';
import { IParseFileService } from '../../../core/abstracts/parse-service';
import { Client } from '../../../core/entities/client.entity';
import * as fs from 'fs';
import * as readline from 'node:readline';

@Injectable()
export class ParseXmlService implements IParseFileService {
  async parseFile(pathFile: string): Promise<Client[]> {
    return await this.parseXML(pathFile);
  }

  private async parseXML(dirFile: string) {
    const clients: Client[] = [];
    const rl = readline.createInterface({
      input: fs.createReadStream(dirFile, 'utf-8'),
      crlfDelay: Infinity,
    });

    const regex =
      /<reading\s+clientID="([^"]+)"\s+period="([^"]+)">([^<]+)<\/reading>/;

    for await (const line of rl) {
      // Each line in the file will be successively available here as `line`.
      const match = line.match(regex);
      if (match) {
        const id = match[1];
        const period = match[2];
        const reading = match[3];

        const lastElement = clients.slice(-1);
        if (lastElement[0] && lastElement[0].id === id) {
          lastElement[0].readings.push({ period, reading: Number(reading) });
        } else {
          const newClient: Client = {
            id: id,
            readings: [{ period, reading: Number(reading) }],
          };
          clients.push(newClient);
        }
      }
    }

    return clients;
  }
}
