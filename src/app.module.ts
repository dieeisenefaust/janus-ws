import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimespanModule } from './timespan/timespan.module';

@Module({
  imports: [TimespanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
