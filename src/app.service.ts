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
  
  async getUsers(): Promise<Object> {
    const Users = await prisma.uzer.findMany();
    console.log(Users);
    return Users ;
  }

  async getUser(email: string): Promise<any> {
    const user = await prisma.uzer.findMany( {
      where : {
        email:email,
      }
    })
    if (user?.length === 1) {
      return user[0]
    }
    else 
      return {"email":"don't exist"}
  }

  async createUser(email: string , name:string , password:string) {
    const exist = await this.getUser(email)
    if ( exist?.email === "don't exist" ) {
      const user = await prisma.uzer.create({
        data:{
          email:email,
          name:name,
        }
      })
      return {"info":"added a new user"}
    }
    else 
      return {"info":"email already exist"}
  }

  async deleteUser(email: string) {
    const exist = await this.getUser(email)
    if ( exist?.email === "don't exist" ) {
      return {"info":"email don't exist"}
    }
    else {
      const user  = await prisma.uzer.delete({
        where:{
          email:email,
        }
      })
      return {"info":"deleted","user":user}
    }
  }

  async getUserData(email:string) {
    const user = await this.getUser(email)
    if ( user?.email === "don't exist") 
      return user
    else {
      const data = await prisma.data.findMany({
        where:{
          userid:user.id
        }
      })
      return data
    }    
  }

  async postUserData(email:string , cat:string , src:string) {
    const user = await this.getUser(email)
    if ( user?.email === "don't exist") 
      return user
    else {
      const data = await prisma.data.create({
        data:{
          userid:user.id,
          cat: cat,
          src : src,
        }
      })
      return data
    }  

  }
}

