import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerService } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackerController } from './api/tracker/tracker.controller';
import { TrackerModule } from './api/tracker/tracker.module';
import { join } from 'path';
@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1:28100,127.0.0.1:28101,127.0.0.1:28102/performance?replicaSet=rs1',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true
    }),
    TrackerModule
  ],
  controllers: [AppController, TrackerController],
  providers: [AppService],
})
export class AppModule {}
