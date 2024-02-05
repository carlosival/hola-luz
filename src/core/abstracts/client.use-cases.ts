import { ClientSuspiciousDto } from '../dtos/client.suspicious.dto';

export abstract class IClientUseCasesIN {
  abstract getSuspicious(filePath: string): void;
}

export abstract class IClientUseCasesOUT {
  abstract printSuspicious(suspicious: ClientSuspiciousDto[]): void;
}
