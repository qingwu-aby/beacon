/**
 * @desc 模块声明
 * npm g mo tracker
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackerResolver } from './tracker.resolver';
import { TrackerService } from './tracker.service';
import { Tracker } from './tracker.entity';
import { TrackerController } from './tracker.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tracker])],
  providers: [TrackerResolver, TrackerService],
  controllers: [TrackerController]
})
export class TrackerModule {}
