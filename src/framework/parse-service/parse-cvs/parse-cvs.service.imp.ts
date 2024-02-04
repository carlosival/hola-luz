import { Injectable } from '@nestjs/common';
import { CsvParser, ParsedData } from 'nest-csv-parser';
//import { ClientDto } from '../../../core/dtos/client.dto';
//import { Client } from '../../../core/entities/client.entity';
import * as fs from 'fs';

class ClientCvsModel {
  client: string;
  period: string;
  reading: number;
}

@Injectable()
export class ParseCvsService {
  constructor(private readonly csvParser: CsvParser) {}
  async parse() {
    // Create stream from file (or get it from S3)
    const stream = fs.createReadStream(__dirname + '/some.csv');
    const { list: entities }: ParsedData<ClientCvsModel> =
      await this.csvParser.parse(stream, ClientCvsModel);

    //From Model to Dto
    //const clientsDto: ClientDto[] = this.fromModeltoDto(entities)
    return entities;
  }
  /* fromModeltoDto(models: ClientCvsModel[]): ClientDto[] {
    if(models.length === 0) return []
    const clients: ClientDto[] = [];
    let prev = models[0];
    let prevDto = new ClientDto(prev.client,{prev})
    let sum = 0;

    models.forEach((curr, idx) =>{
        if(curr.client === prev.client){
            sum += curr.reading;
        }else{
            prevDto = new ClientDto();
            sum = curr.reading
        }
        prevDto.reading.push(curr.reading);
    }){

    }

    return clients;
  } */
}
