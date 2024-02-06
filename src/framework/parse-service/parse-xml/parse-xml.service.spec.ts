import { Test, TestingModule } from '@nestjs/testing';
import { ParseXmlService } from './parse-xml.service.imp';
import * as fs from 'fs';

describe('ParseXmlService', () => {
  let parseXmlService: ParseXmlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParseXmlService],
    }).compile();

    parseXmlService = module.get<ParseXmlService>(ParseXmlService);
  });

  it('should be defined', () => {
    expect(parseXmlService).toBeDefined();
  });

  it('should parse XML file and return an array of clients', async () => {
    const pathToFile = '2016-readings.xml';
    const result = await parseXmlService.parseFile(pathToFile);

    // Add more specific assertions
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });

  // Add more test cases to cover edge cases and ensure the correct behavior of your code.

  // Mocking the fs module to test different scenarios (e.g., empty file, non-existent file, etc.)
  it('should handle errors when reading the file', async () => {
    jest.spyOn(fs, 'createReadStream').mockImplementation(() => {
      throw new Error('Simulated error');
    });

    await expect(parseXmlService.parseFile('nonexistent.xml')).rejects.toThrow(
      'Simulated error',
    );
  });
});
