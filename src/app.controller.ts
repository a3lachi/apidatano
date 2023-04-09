import { Controller, Get , Put, Param , Delete , Body} from '@nestjs/common';
import { AppService  } from './app.service';
import { ApiOperation , ApiOkResponse , ApiProperty , ApiBody ,ApiTags} from '@nestjs/swagger';


@Controller()
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
  @ApiOkResponse({
    description: 'User infos',
    type: Object,
  })
  @ApiProperty({ example: 'username12345' })
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
