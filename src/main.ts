/*
 * @Author: yejiayu gailjy@126.com
 * @Date: 2024-09-10 09:08:26
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-09-10 15:41:12
 * @FilePath: \book-system\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express'; 
import { join } from 'path';
 
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({transform:true}));

  app.enableCors();

  app.useStaticAssets(join(__dirname, '../uploads'), {prefix: '/uploads'});


  await app.listen(3000);
}
bootstrap();
