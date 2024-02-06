import { Test, TestingModule } from '@nestjs/testing';
import { ParseCvsService } from './parse-cvs.service.imp';

describe('ParseCsvService', () => {
  let parseCsvService: ParseCvsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParseCvsService],
    }).compile();

    parseCsvService = module.get<ParseCvsService>(ParseCvsService);
  });

  it('should be defined', () => {
    expect(parseCsvService).toBeDefined();
  });

  describe('parseFile', () => {
    it('should parse CSV file and return an array of clients', async () => {
      const filePath = '2016-readings.csv';
      const result = await parseCsvService.parseFile(filePath);

      // Assert the structure of the result based on your expectations
      expect(result).toHaveLength(10);
      expect(result[0].id).toEqual('583ef6329d7b9');
      expect(result[0].readings).toHaveLength(12);
      // Add more assertions
    });

    // Add more test cases as needed
  });
});
