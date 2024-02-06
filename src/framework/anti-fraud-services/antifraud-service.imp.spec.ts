import { Test, TestingModule } from '@nestjs/testing';
import { AntiFraudService } from './antifraud-service.imp';
import { Client } from '../../core/entities/client.entity';

describe('AntiFraudService', () => {
  let service: AntiFraudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AntiFraudService],
    }).compile();

    service = module.get<AntiFraudService>(AntiFraudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('calculateMedian', () => {
    it('should calculate the median correctly', () => {
      const client: Client = {
        id: '134346',
        readings: [
          { period: '2022-01', reading: 10 },
          { period: '2022-02', reading: 15 },
          { period: '2022-03', reading: 20 },
          { period: '2022-04', reading: 25 },
          { period: '2022-05', reading: 30 },
          { period: '2022-06', reading: 35 },
          { period: '2022-07', reading: 40 },
          { period: '2022-08', reading: 45 },
          { period: '2022-09', reading: 50 },
          { period: '2022-10', reading: 55 },
          { period: '2022-11', reading: 60 },
          { period: '2022-12', reading: 65 },
        ],
      };

      const result = service['calculateMedian'](client);
      expect(result).toBe(37.5);
    });
  });

  describe('getSuspicious', () => {
    it('should return suspicious clients', () => {
      const clients: Client[] = [
        {
          id: '1',
          readings: [
            { period: '2022-01', reading: 10 }, // Suspicious
            { period: '2022-02', reading: 150 }, // Suspicious
            { period: '2022-03', reading: 20 },
            { period: '2022-04', reading: 25 },
            { period: '2022-05', reading: 30 },
            { period: '2022-06', reading: 35 },
            { period: '2022-07', reading: 35 },
            { period: '2022-08', reading: 45 },
            { period: '2022-09', reading: 31 },
            { period: '2022-10', reading: 35 },
            { period: '2022-11', reading: 35 },
            { period: '2022-12', reading: 34 },
          ],
        },
        {
          id: '2',
          readings: [
            { period: '2022-01', reading: 30 },
            { period: '2022-02', reading: 40 },
            { period: '2022-03', reading: 60 }, // Suspicious
            { period: '2022-04', reading: 30 },
            { period: '2022-05', reading: 30 },
            { period: '2022-06', reading: 45 },
            { period: '2022-07', reading: 45 },
            { period: '2022-08', reading: 30 },
            { period: '2022-09', reading: 35 },
            { period: '2022-10', reading: 40 },
            { period: '2022-11', reading: 35 },
            { period: '2022-12', reading: 40 },
          ],
        },
      ];

      const result = service.getSuspicious(clients);
      expect(result).toEqual([
        { id: '1', month: '2022-01', suspicious: 10, median: 34.5 },
        { id: '1', month: '2022-02', suspicious: 150, median: 34.5 },
        { id: '2', month: '2022-03', suspicious: 60, median: 37.5 },
      ]);
    });
  });
});
