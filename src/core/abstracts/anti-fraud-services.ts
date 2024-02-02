import { ClientDto } from '../dtos/client.dto';

export abstract class IAntiFraudService {
  abstract getSuspicious(clientDto: ClientDto[]): ClientDto[];
}
