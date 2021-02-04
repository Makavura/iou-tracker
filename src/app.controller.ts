import { Body, Post, Controller, Delete, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/users')
  fetchUsers(@Body() payload: FetchUsersInformation, @Res() Response: Response ) {

  }

  @Post('/add')
  createUsers(@Body() payload: User, @Res() Response: Response) {

  }

  @Post('/iou')
  createIOU(@Body() payload: IOUPayload, @Res() Response: Response) {

  }

  @Delete('/user')
  deleteUserIOUs(@Body() payload: User, @Res() Response: Response) {

  }


}

interface FetchUsersInformation {
  "users": [
    string
  ]
}

interface IOUPayload {
  lender: string,
  borrower: string,
  amount: number
}

interface User {
  user: string
}