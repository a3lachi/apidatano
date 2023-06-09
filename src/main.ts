import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';




async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // SWAGGER 
  const config = new DocumentBuilder()
    .setTitle('Datano Backend')
    .setDescription('API Description')
    .setVersion('1.2')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);


  await app.listen(3000);
}
bootstrap();
