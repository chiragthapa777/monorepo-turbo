import { Injectable } from '@nestjs/common';
import {IUser } from "@repo/types"

@Injectable()
export class AppService {
  getHello(): any {
    const user:IUser={
      id:1,
      email:""
    }
    return user
  }
}