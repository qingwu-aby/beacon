/**
 * @desc 服务声明
 * npm g s tracker
 */
import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TrackerInput } from './tracker.input';
import { Tracker } from './tracker.entity';

@Injectable()
export class TrackerService {
  constructor(@InjectRepository(Tracker) private readonly trackerRepository: MongoRepository<Tracker>) {}

  async findAll(): Promise<Tracker[]> {
    return this.trackerRepository.find();
  }

  async create(input: TrackerInput): Promise<Tracker> {
    const tracker = new Tracker();
    // tracker._id = Math.random();
    tracker.trackerNo = input.trackerNo;
    tracker.trackerContent = input.trackerContent;

    return this.trackerRepository.save(tracker);
  }
}
