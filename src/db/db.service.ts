/*
 * @Author: yejiayu gailjy@126.com
 * @Date: 2024-09-10 10:02:33
 * @LastEditors: yejiayu gailjy@126.com
 * @LastEditTime: 2024-09-10 10:25:49
 * @FilePath: \book-system\src\db\db.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Inject, Injectable } from '@nestjs/common';
import { DbModuleOptions } from './db.module';
import { access, readFile, writeFile } from 'fs/promises';

@Injectable()
export class DbService {

    @Inject('OPTIONS')
    private options: DbModuleOptions;

    async read(){
        const filePath = this.options.path;

        try{
            await access(filePath)
        }catch(e){
            return [];
        }

        const str = await readFile(filePath, {
            encoding: 'utf-8'
        })
    
        if(!str){
            return []
        }
        
        return JSON.parse(str);
    }

    async write(obj: Record<string, any>){
        await writeFile(this.options.path, JSON.stringify(obj || []),{
            encoding: 'utf-8'
        });
    }

}
