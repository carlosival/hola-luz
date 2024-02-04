export class Client {
  id: string;
  readings: Reading[];
}

export class Reading {
  period: string;
  reading: number;
}
