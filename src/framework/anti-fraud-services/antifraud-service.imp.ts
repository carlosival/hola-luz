import { Injectable } from '@nestjs/common';
import { IAntiFraudService } from '../../core/abstracts/anti-fraud-services';
import { ClientDto } from 'src/core/dtos/client.dto';

@Injectable()
export class AntiFraudService implements IAntiFraudService {
  getSuspicious(clientDto: ClientDto[]): ClientDto[] {
    if (clientDto.length === 0) {
      return [];
    }
    const median: number =
      clientDto.reduce((acc, curr) => acc + curr.median, 0) / clientDto.length;
    const upperBound = median + median / 2;
    const lowerBound = median + median / 2;

    return clientDto.filter((ele) => {
      return ele.median > upperBound || ele.median < lowerBound;
    });
  }
}
