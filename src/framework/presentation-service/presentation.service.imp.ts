import { IClientUseCasesOUT } from '../../core/abstracts/client.use-cases';
import { ClientSuspiciousDto } from '../../core/dtos/client.suspicious.dto';
import { Transform } from 'stream';
import { Console } from 'console';

export class PresentationService implements IClientUseCasesOUT {
  printSuspicious(suspicious: ClientSuspiciousDto[]): void {
    this.printSus(suspicious);
  }

  private printSus(suspiciousClients: ClientSuspiciousDto[]): void {
    this.table(suspiciousClients);
  }
  private table(input: ClientSuspiciousDto[]) {
    // @see https://stackoverflow.com/a/67859384
    const ts = new Transform({
      transform(chunk, enc, cb) {
        cb(null, chunk);
      },
    });
    const logger = new Console({ stdout: ts });
    logger.table(input);
    const table = (ts.read() || '').toString();
    let result = '';
    for (const row of table.split(/[\r\n]+/)) {
      let r = row.replace(/[^┬]*┬/, '┌');
      r = r.replace(/^├─*┼/, '├');
      r = r.replace(/│[^│]*/, '');
      r = r.replace(/^└─*┴/, '└');
      r = r.replace(/'/g, ' ');
      result += `${r}\n`;
    }
    console.log(result);
  }
}
