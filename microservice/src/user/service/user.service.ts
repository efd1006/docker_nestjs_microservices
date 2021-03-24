import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, Observer } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { IUser } from '../models/user.interface';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {}

    public add(user: IUser): Observable<IUser> {
        return from(this.userRepository.save(user));
    }

    public findAll(): Observable<IUser[]> {
        return from(this.userRepository.find());
    }
}
