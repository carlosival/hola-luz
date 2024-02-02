import { Injectable } from '@nestjs/common';
import { IAntiFraudService } from '../../core/abstracts/anti-fraud-services';
import { ClientDto } from 'src/core/dtos/client.dto';

@Injectable()
export class AntiFraudService implements IAntiFraudService {
  getSuspicious(clientDto: ClientDto[]): ClientDto[] {
    // Implement some logic here
    return clientDto; //without ay filter
  }
}
