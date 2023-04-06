import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets';
import { log } from 'console';
import { Server } from 'ws';

@Catch()
export class AllExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception: WsException, host: ArgumentsHost) {
    const client = host.switchToWs().getClient() as WebSocket;
    const data = host.switchToWs().getData();
    const error = exception.name;
    const details = exception.message;

    console.log('in exceptions filter');
    console.log(data);
    console.log(exception.name);
    //super.catch(exception, host);

    client.send(
      JSON.stringify({
        event: 'error',
        data: {
          id: (client as any).id,
          rid: data.rid,
          error: error,
          message: details,
        },
      }),
    );
  }
}
