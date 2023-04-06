import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  WsResponse,
  WsException,
  BaseWsExceptionFilter,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'ws';
import { TimespanService } from './timespan.service';
import { CreateTimespanDto } from './dto/create-timespan.dto';
import { UpdateTimespanDto } from './dto/update-timespan.dto';
import { UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './all-exceptions.filter';

@UsePipes(new ValidationPipe({ transform: true, enableDebugMessages: true }))
@WebSocketGateway({
  cors: {
    origin: '*',
  },
  //path: '/test',
})
export class TimespanGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly timespanService: TimespanService) {}

  @SubscribeMessage('createTimespan')
  //@UseFilters(new AllExceptionsFilter())
  @UseFilters(new BaseWsExceptionFilter())
  async create(
    @MessageBody() createTimespanDto: CreateTimespanDto,
  ): Promise<{ Message: string; createTimespanDto: CreateTimespanDto }> {
    //return this.timespanService.create(createTimespanDto);
    this.server.emit(JSON.stringify({ message: 'test', createTimespanDto }));
    return { Message: 'From Create', createTimespanDto };
  }

  // @SubscribeMessage('findAllTimespan')
  // findAll() {
  //   return this.timespanService.findAll();
  // }

  // @SubscribeMessage('findOneTimespan')
  // findOne(@MessageBody() id: string) {
  //   return this.timespanService.findOne(id);
  // }

  // @SubscribeMessage('updateTimespan')
  // update(@MessageBody() updateTimespanDto: UpdateTimespanDto) {
  //   return this.timespanService.update(
  //     updateTimespanDto.userId,
  //     updateTimespanDto,
  //   );
  // }

  // @SubscribeMessage('removeTimespan')
  // remove(@MessageBody() id: string) {
  //   return this.timespanService.remove(id);
  // }

  // @SubscribeMessage('exception')
  // async test(@MessageBody() x: string) {
  //   console.log('In message');
  //   console.log(x);
  // }
}
