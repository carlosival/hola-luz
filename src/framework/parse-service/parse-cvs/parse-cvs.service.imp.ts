import { Injectable } from '@nestjs/common';
import { IParseFileService } from '../../../core/abstracts/parse-service';
import { Client } from '../../../core/entities/client.entity';
import * as fs from 'fs';
import * as readline from 'node:readline';

@Injectable()
export class ParseCvsService implements IParseFileService {
  async parseFile(pathFile: string): Promise<Client[]> {
    return await this.parseCSV(pathFile);
  }

  private async parseCSV(dirFile: string) {
    const clients: Client[] = [];
    let counter = 0;
    const offset = 1;
    const delimeter = ',';
    const rl = readline.createInterface({
      input: fs.createReadStream(dirFile, 'utf-8'),
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      // Each line in the file will be successively available here as `line`.
      if (counter >= offset) {
        const row = line.split(delimeter);
        const id = row[0];
        const period = row[1];
        const reading = row[2];

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
      counter++;
    }

    return clients;
  }
}
