import { Command, CommandRunner } from 'nest-commander';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { IClientUseCasesIN } from '../../core/abstracts/client.use-cases';
import * as fs from 'fs';

@Command({
  name: 'import',
  options: {
    isDefault: true,
  },
})
@Injectable()
export class ImportCommand extends CommandRunner {
  constructor(
    private readonly clientUseCases: IClientUseCasesIN,
    private eventEmitter: EventEmitter2,
  ) {
    super();
  }
  async run(passedParams: string[]): Promise<void> {
    const filePath = passedParams[0];
    if (fs.existsSync(filePath)) {
      this.clientUseCases.getSuspicious(filePath);
    } else {
      console.log(`No es posible leer el archivo:`);
      //  Close the program
    }
  }
}
