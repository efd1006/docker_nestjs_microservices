import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'MICROSERVICE', 
        transport: Transport.TCP,
        options: {
          host: 'microservice',
          port: 8877
        }
      },
    ]),
  ],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
