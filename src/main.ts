/*
 * @Author: yejiayu gailjy@126.com
 * @Date: 2024-09-10 09:08:26
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-09-10 10:01:18
 * @FilePath: \book-system\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({transform:true}));

  await app.listen(3000);
}
bootstrap();
