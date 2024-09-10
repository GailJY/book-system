/*
 * @Author: yejiayu gailjy@126.com
 * @Date: 2024-09-10 14:46:20
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-09-10 15:06:41
 * @FilePath: \book-system\src\book\dto\create-book.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IsNotEmpty } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({ message: "名不为空 "})
    name: string;

    @IsNotEmpty({ message: "作者不为空"})
    author: string;

    @IsNotEmpty({ message: "描述不为空"})
    description: string;

    @IsNotEmpty({ message: "封面不为空"})
    cover: string;
}
