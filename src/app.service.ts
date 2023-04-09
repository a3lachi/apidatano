import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


type UserCredentials = {
  string: string;
};

@Injectable()
export class AppService {
  getHome(): string {
    return 'Home';
  }
  
  async getUsers(): Promise<any> {
    const Users = await prisma.uzer.findMany();
    console.log(Users);
    return Users ;
  }

  async getUser(email: string): Promise<any> {
    const user = prisma.uzer.findMany( {
      where : {
        email:email,
      }
    })
  }
}

