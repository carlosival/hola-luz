import { ClientSuspiciousDto } from '../dtos/client.suspicious.dto';
import { Client } from '../entities/client.entity';

export abstract class IAntiFraudService {
  abstract getSuspicious(client: Client[]): ClientSuspiciousDto[];
}
