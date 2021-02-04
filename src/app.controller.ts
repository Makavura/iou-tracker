import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  fetchUsers(@Body() payload: FetchUsersInformation) {

  }

}

interface FetchUsersInformation {
  "users": [
    string
  ]
}