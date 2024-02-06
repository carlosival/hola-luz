# Holaluz Suspicious Reading Detector

## Description Solution

The solution employs a Hexagonal Architecture to handle different inputs seamlessly. This architecture facilitates the integration of diverse inputs, such as CSV and XML files, and allows for easy adaptation to other sources. The command command-line application that takes a file name (e.g., 2016-readings.xml or 2016-readings.csv) and outputs a table with suspicious readings, including client ID, month, actual reading, and the corresponding median. The solution is written with TypeScript and the framework NestJS 

## Installation

Ensure you have [Dependencies] installed on your system. Clone the repository, navigate to the project folder, and follow the instructions below:

```bash
$ yarn install
```


## Running the app

```bash
# run the app without build
$ yarn run start:cli 2016-readings.csv
$ yarn run start:cli 2016-readings.xml

# build the app and run
$ yarn run build
$ node ./dist/main /absolute/path/to/file/2016-readings.xml
$ node ./dist/main /absolute/path/to/file/2016-readings.csv

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Version 0.1.0

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Carlos Martinez Ival
- LinkedIn - [@nestframework](https://www.linkedin.com/in/carlos-martinez-ival-80b7bb107/)
  
## Acknowledgments
Inspiration, code snippets, etc.
* [clean-architecture-node](https://github.com/royib/clean-architecture-node)
* [Node Clean Architecture — Deep Dive](https://betterprogramming.pub/node-clean-architecture-deep-dive-ab68e523554b)
* [The Clean Code Blog - Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
* [Clean Node.js Architecture —With NestJs and TypeScript](https://betterprogramming.pub/clean-node-js-architecture-with-nestjs-and-typescript-34b9398d790f)

