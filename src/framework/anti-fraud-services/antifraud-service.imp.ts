import { Injectable } from '@nestjs/common';
import { IAntiFraudService } from '../../core/abstracts/anti-fraud-services';
import { Client, Reading } from '../../core/entities/client.entity';
import { ClientSuspiciousDto } from '../../core/dtos/client.suspicious.dto';

@Injectable()
export class AntiFraudService implements IAntiFraudService {
  getSuspicious(client: Client[]): ClientSuspiciousDto[] {
    return this.calculateSuspicous(client);
  }

  private calculateMedian(client: Client): number | null {
    // Extract readings from objects
    const readings = client.readings.map((reading) => reading.reading);

    // Sort readings in ascending order
    readings.sort((a, b) => a - b);

    // Calculate the median
    return Number(((readings[5] + readings[6]) / 2).toFixed(2));
  }

  private calculateSuspicous(clients: Client[]): ClientSuspiciousDto[] {
    const suspiciousClients: ClientSuspiciousDto[] = [];

    for (const client of clients) {
      const clientMedian = this.calculateMedian(client);
      const susReading = client.readings
        .filter(
          (reading: Reading) =>
            reading.reading < clientMedian * 0.5 ||
            reading.reading > clientMedian * 1.5,
        )
        .map((reading: Reading) => {
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
}
