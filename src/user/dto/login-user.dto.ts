/*
 * @Author: yejiayu gailjy@126.com
 * @Date: 2024-09-10 13:48:16
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-09-10 13:48:45
 * @FilePath: \book-system\src\user\dto\login-user-dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IsNotEmpty, MinLength } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty({ message: '用户名不能为空' })
    username: string;

    @IsNotEmpty({ message: '密码不能为空' })
    @MinLength(6, { message: '密码最少 6 位'})
    password: string;
}