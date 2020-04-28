/* eslint-disable @typescript-eslint/no-empty-function */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, LoggerService } from '@nestjs/common';

export class MyLogger implements LoggerService {
  log(message: string) {}
  error(message: string, trace: string) {}
  warn(message: string) {}
  debug(message: string) {}
  verbose(message: string) {}
}
const port = process.env.PORT || 3003;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: new MyLogger()
  });
  app.setGlobalPrefix('api');
  await app.listen(port);
  Logger.log(`Server is running on https://localhost:${port}`);
}
bootstrap();
