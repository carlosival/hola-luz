import { IClientUseCasesOUT } from '../../core/abstracts/client.use-cases';
import { ClientSuspiciousDto } from '../../core/dtos/client.suspicious.dto';

export class PresentationService implements IClientUseCasesOUT {
  printSuspicious(suspicious: ClientSuspiciousDto[]): void {
    this.printSus(suspicious);
  }

  private printSus(suspiciousClients: ClientSuspiciousDto[]): void {
    // Print the table to the console
    console.log('| Client | Month | Suspicious | Median'); // PadEndMAx String of every column
    console.log('----------------------------------');
    suspiciousClients.forEach((client) => {
      console.log(
        `| ${client.id} | ${client.month} | ${client.suspicious} | ${client.median} `,
      );
    });
  }
}
