import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { IUser } from './models/user.interface';

@Injectable()
export class UserService {
  constructor(@Inject('MICROSERVICE') private client: ClientProxy) {}

  public addUser(user: IUser): Observable<IUser> {
    return this.client
      .send<IUser>('addUser', user)
  }

  public findAll(): Observable<IUser[]> {
    return this.client
      .send('findAll', {});
  }

  public test() {
    return this.client
      .send('gethello', {});
  }
}