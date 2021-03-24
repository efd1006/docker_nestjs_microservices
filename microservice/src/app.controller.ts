import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';


@Controller('users')
export class AppController {
  private logger = new Logger("Micro")

  @MessagePattern('gethello')
  public log() {
    this.logger.log('hello');
  }
}
