import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
    private logger = new Logger('AppController');

    constructor(private userService: UserService) {}

    @MessagePattern('addUser')
    public add(@Body() user: IUser): Observable<IUser> {
        this.logger.log(`Received user-create request with the following data ${user}`);
        return this.userService.add(user);
    }

    @MessagePattern('findAll')
    public findAll(): Observable<IUser[]> {
        return this.userService.findAll();
    }
}
