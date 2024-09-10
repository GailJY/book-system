/*
 * @Author: yejiayu gailjy@126.com
 * @Date: 2024-09-10 09:10:53
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-09-10 14:15:44
 * @FilePath: \book-system\src\user\user.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  @Inject(DbService)
  dbService: DbService;

  async register(registerUserDto: RegisterUserDto) {
      const users: User[] = await this.dbService.read();
      
      const foundUser = users.find(item => item.username === registerUserDto.username);

      if(foundUser) {
          throw new BadRequestException('该用户已经注册');
      }

      const user = new User();
      user.username = registerUserDto.username;
      user.password = registerUserDto.password;
      users.push(user);

      await this.dbService.write(users);
      return user;
  }

  async login(loginUserDto: LoginUserDto){
    const users: User[] = await this.dbService.read();

    const foundUser = users.find(item => item.username === loginUserDto.username);

    if(!foundUser){
      throw new BadRequestException('用户名不存在');
    }

    if(foundUser.password !== loginUserDto.password){
      throw new BadRequestException('密码错误');
    }

    return foundUser;
  }

}
