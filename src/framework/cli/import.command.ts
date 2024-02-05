import { Command, CommandRunner } from 'nest-commander';
import * as cowsay from 'cowsay';
import * as fs from 'fs';
import { Client, Reading } from '../../core/entities/client.entity';
import * as readline from 'node:readline';

//import { IParseDataFactory } from '../../core/abstracts/';

@Command({
  name: 'import',
  options: {
    isDefault: true,
  },
})
export class ImportCommand extends CommandRunner {
  async run(passedParams: string[]): Promise<void> {
    const dirFile = passedParams[0];
    console.log(dirFile);

    if (fs.existsSync(dirFile)) {
      const ext = getExtension(dirFile);
      const clients = await parseXML(dirFile);
      const sus = await calculateSuspicous(clients);
      printSuspicious(sus);
      console.log(cowsay.say({ text: `Find The File with ext ${ext}` }));
    } else {
      console.log(`We can't  read this file ${'dirFile'}`);
      console.log(cowsay.say({ text: 'We could not Find The File' }));
    }
  }
}

function getExtension(filename: string) {
  return filename.split('.').pop();
}

function calculateMedian(client: Client): number | null {
  // Extract readings from objects
  const readings = client.readings.map((reading) => reading.reading);

  // Sort readings in ascending order
  readings.sort((a, b) => a - b);

  // Calculate the median
  return Number(((readings[5] + readings[6]) / 2).toFixed(2));
}

function calculateSuspicous(clients: Client[]) {
  if (clients.length === 0) {
    return []; // Return null for an empty array
  }

  const suspiciousClients = [];

  for (const client of clients) {
    const clientMedian = calculateMedian(client);
    const susReading = client.readings
      .filter(
        (reading: Reading) =>
          reading.reading < clientMedian * 0.5 ||
          reading.reading > clientMedian * 1.5,
      )
      .map((reading) => {
        return {
          id: client.id,
          month: reading.period,
          suspicious: reading.reading,
          median: clientMedian,
        };
      });

    suspiciousClients.push(...susReading);
  }

  return suspiciousClients;
}

function printSuspicious(suspiciousClients) {
  // Print the table to the console
  console.log('| Client | Month | Suspicious | Median'); // PadEndMAx String of every column
  console.log('----------------------------------');
  suspiciousClients.forEach((client) => {
    console.log(
      `| ${client.id} | ${client.month} | ${client.suspicious} | ${client.median} `,
    );
  });
}

async function parseCSV(dirFile: string) {
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

async function parseXML(dirFile: string) {
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
    console.log(match);
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

class ClientCvsModel {
  client: string;
  period: string;
  reading: string;
}
