import { Command, CommandRunner } from 'nest-commander';
import * as cowsay from 'cowsay';

@Command({
  name: 'import',
  options: {
    isDefault: true,
  },
})
export class ImportCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log(cowsay.say({ text: 'Hello World!' }));
  }
}
