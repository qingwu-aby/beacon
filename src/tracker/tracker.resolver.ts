/**
 * @desc 生成解析器
 * npm g r tracker
 */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TrackerService } from './tracker.service';
import { TrackerInput } from './tracker.input';
import { Tracker } from './tracker.entity';

@Resolver('Tracker')
export class TrackerResolver {
  constructor(private readonly trackerService: TrackerService) {}

  @Query(() => String)
  async hello() {
    return 'world';
  }

  @Query(() => [Tracker])
  async tracker() {
    return this.trackerService.findAll();
  }

  @Mutation(() => [Tracker])
  async createTracker(@Args('input') input: TrackerInput) {
    return await this.trackerService.create(input);
  }
}
