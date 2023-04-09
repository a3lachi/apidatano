import { Controller, Get , Put, Param , Delete , Body, Post} from '@nestjs/common';
import { AppService  } from './app.service';
import { ApiOperation , ApiOkResponse , ApiProperty , ApiParam, ApiBody ,ApiTags} from '@nestjs/swagger';


@Controller("home")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiTags('Datano')
  @ApiOperation({ summary: 'Check if Server and DB are up' })
  getHome(): string {
    return this.appService.getHome();
  }

}


@Controller('/user')
export class UserController {

  constructor(private readonly appService: AppService) {}


  @Get(':email')
  @ApiTags('User')
  @ApiOperation({ summary: 'Check if user exist by email' })
  @ApiParam({
    name: "email",
    description: "Email of the user",
    example:"aala.simo@gmail.com"
  })
  @ApiOkResponse({
    description: 'User infos',
    type: Object,
  })
  findOne(@Param('email') email: string) {
    return this.appService.getUser(email);
  }


  @Put()
  @ApiTags('User')
  @ApiOperation({ summary: 'Add a new user' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
      },
      example: {
        email:"jeannebaptise@live.fr",
        name:"Jean Baptiste",
        password:"Azerty2023",
      }
    },
  })
  @ApiOkResponse({
    description: 'User creation status',
    type: Object,
  })
  createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.appService.createUser(email,name,"pwd")
  }


  @Delete()
  @ApiTags('User')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string' },
      },
      example: {
        email:"jeannebaptise@live.fr",
      }
    },
  })
  @ApiOkResponse({
    description: 'User delete status',
    type: Object,
  })
  deleteUser(
    @Body('email') email: string,
  ) {
    return this.appService.deleteUser(email)
  }



}


@Controller('data')
export class DataController {

  constructor(private readonly appService: AppService) {}

  @Get(':email')
  @ApiTags('Data')
  @ApiOperation({ summary: 'Get user data' })
  @ApiOkResponse({
    description: 'User data',
    type: Object,
  })
  @ApiParam({
    name: "email",
    description: "Email of the user",
    example:"aala.simo@gmail.com"
  })
  getUserData(@Param('email') email: string) {
    return this.appService.getUserData(email);
  }

  @Put('user')
  @ApiTags('Data')
  @ApiOperation({ summary: 'Add user data' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        cat: { type: 'string' },
        src: { type: 'string' },
      },
      example: {
        email:"jeannebaptise@live.fr",
        cat:"Traffic",
        src:"https://imgbb.com/sd456DFHG-dg"
      }
    },
  })
  @ApiOkResponse({
    description: 'Post data status',
    type: Object,
  })
  postUserData(@Body('email') email : string , @Body('src') src : string , @Body('cat') cat : string) {
    return this.appService.postUserData(email,cat,src)
  }
}