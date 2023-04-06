import { Module } from '@nestjs/common';
import { TimespanService } from './timespan.service';
import { TimespanGateway } from './timespan.gateway';
import { AllExceptionsFilter } from './all-exceptions.filter';

@Module({
  providers: [TimespanGateway, TimespanService, AllExceptionsFilter],
})
export class TimespanModule {}
