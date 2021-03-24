import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { UserService } from './app.service';
import { IUser } from './models/user.interface';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    this.logger.log("Main received the request");
    return this.userService.findAll();
  }

  @Get('test')
  test() {
    return this.userService.test();
  }

  @Post()
  addUser(@Body() user: IUser) {
    this.logger.log(`New user being added ${user}`);
    return this.userService.addUser(user);
  }
}
