import { IAntiFraudService } from '../core/abstracts/anti-fraud-services';
import { IParseFileFactory } from '../core/abstracts/parse-factory';
import { Injectable } from '@nestjs/common';
import {
  IClientUseCasesIN,
  IClientUseCasesOUT,
} from '../core/abstracts/client.use-cases';
import { ClientSuspiciousDto } from '../core/dtos/client.suspicious.dto';
import { Client } from '../core/entities/client.entity';

@Injectable()
export class ClientUseCases implements IClientUseCasesIN {
  constructor(
    private antiFraudService: IAntiFraudService,
    private parseFileFactory: IParseFileFactory,
    private presentationService: IClientUseCasesOUT,
  ) {}

  getSuspicious(filePath: string): void {
    const parse = this.parseFileFactory.getParseFile(filePath);
    const clients: Client[] = parse.parseFile(filePath);
    const suspiciuos: ClientSuspiciousDto[] =
      this.antiFraudService.getSuspicious(clients);
    this.presentationService.printSuspicious(suspiciuos);
  }
}
