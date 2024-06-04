import { Controller, Get, Post, Body } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) { }

  @Post()
  create(@Body() data: CreateRoomDto) {
    return this.roomService.create(data);
  }

  @Get()
  findAll() {
    return this.roomService.findAll();
  }

}
