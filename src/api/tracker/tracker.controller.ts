import { Controller, Get } from '@nestjs/common';

@Controller('tracker')
export class TrackerController {
  @Get("/test")
  async test() {
    return "test"
  }
}
