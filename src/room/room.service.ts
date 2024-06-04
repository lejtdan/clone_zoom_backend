import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoomZoom } from '@prisma/client';

@Injectable()
export class RoomService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateRoomDto): Promise<RoomZoom> {
    const zoom = await this.prisma.roomZoom.create({
      data
    })

    return zoom;
  }

  findAll() {
    return `This action returns all room`;
  }
}
