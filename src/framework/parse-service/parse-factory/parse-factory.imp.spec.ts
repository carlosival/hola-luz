import { Test, TestingModule } from '@nestjs/testing';
import { ParseFactory } from './parse-factory.imp';
import { ParseCvsService } from '../parse-cvs/parse-cvs.service.imp';
import { ParseXmlService } from '../parse-xml/parse-xml.service.imp';

describe('ParseFactory', () => {
  let parseFactory: ParseFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParseFactory, ParseCvsService, ParseXmlService],
    }).compile();

    parseFactory = module.get<ParseFactory>(ParseFactory);
  });

  it('should be defined', () => {
    expect(parseFactory).toBeDefined();
  });

  it('should return ParseCvsService for csv file', () => {
    const result = parseFactory.getParseFile('example.csv');
    expect(result).toBeInstanceOf(ParseCvsService);
  });

  it('should return ParseXmlService for xml file', () => {
    const result = parseFactory.getParseFile('example.xml');
    expect(result).toBeInstanceOf(ParseXmlService);
  });

  it('should log a message for an unsupported file type', () => {
    const result = parseFactory.getParseFile('example.txt');
    expect(result).toBeNull();
  });
});
