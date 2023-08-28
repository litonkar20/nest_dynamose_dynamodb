import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';
import { dynamooseConfig } from './config/database/dynamoose.config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const ddb = new dynamoose.aws.ddb.DynamoDB(dynamooseConfig);
  dynamoose.aws.ddb.set(ddb);

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User Management')
    .setDescription('The API Description')
    .setVersion('1.0')
    .addTag('Nest Framework')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen(process.env.PORT);
}
bootstrap();
