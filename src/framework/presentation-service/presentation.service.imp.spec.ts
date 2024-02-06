import { Test, TestingModule } from '@nestjs/testing';
import { PresentationService } from './presentation.service.imp';
import { ClientSuspiciousDto } from '../../core/dtos/client.suspicious.dto';

describe('PresentationService', () => {
  let presentationService: PresentationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresentationService],
    }).compile();

    presentationService = module.get<PresentationService>(PresentationService);
  });

  it('should be defined', () => {
    expect(presentationService).toBeDefined();
  });

  describe('printSuspicious', () => {
    it('should print suspicious clients to the console', () => {
      const spyConsoleLog = jest.spyOn(console, 'log').mockImplementation();

      const suspiciousClients: ClientSuspiciousDto[] = [
        { id: '1', month: '2022-02', suspicious: 150, median: 37.5 },
        { id: '2', month: '2022-12', suspicious: 200, median: 90 },
      ];

      presentationService.printSuspicious(suspiciousClients);

      // Assert console.log is called with the expected output
      expect(spyConsoleLog).toHaveBeenCalled();
      // Add more assertions
    });
  });
});
