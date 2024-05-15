import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Swagger Simple Board')
    .setDescription('The Simple Board API Description')
    .setVersion('1.0')
    .addTag('Board')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('restAPI', app, document);
  await app.listen(3000);
}
bootstrap();
