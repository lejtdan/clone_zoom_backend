import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MessagesWsService } from './messages-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/NewMessageDto';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server;
  constructor(private readonly messagesWsService: MessagesWsService) { }

  handleConnection(client: Socket) {
    console.log({ client: client.id })

  }
  handleDisconnect(client: Socket) {
    console.log({ client: client.id })
  }

  @SubscribeMessage('message')
  onMessage(client: Socket, payload: NewMessageDto) {
    client.broadcast.emit('message-server', {
      message: payload
    })
  }

}
