import { Module } from '@nestjs/common';
import { MessagesWsModule } from './messages-ws/messages-ws.module';
import { RoomModule } from './room/room.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MessagesWsModule, RoomModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
