import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const Port = 3100;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(Port);
}
bootstrap();
