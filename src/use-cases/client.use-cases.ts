import { ClientDto } from '../core/dtos/client.dto';
import { IAntiFraudService } from '../core/abstracts/anti-fraud-services';

@Injectable()
export class ClientUseCases {
  constructor(private antiFraudService: IAntiFraudService) {}

  getSuspicious(clientDto: ClientDto): ClientDto[] {
    return this.antiFraudService.getSuspicious(clientDto);
  }
}
