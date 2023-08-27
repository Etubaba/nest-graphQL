import { Injectable } from '@nestjs/common';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { PrismaService } from '../../db/prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async create(createGameInput: CreateGameInput) {
    const newGame = await this.prisma.game.create({
      data: {
        ...createGameInput,
      },
    });
    return newGame;
  }

  async findAll() {
    const allGames = await this.prisma.game.findMany({});
    return allGames;
  }

  async findOne(id: string) {
    const game = await this.prisma.game.findUnique({
      where: {
        id,
      },
    });
    return game;
  }

  async update(id: string, updateGameInput: UpdateGameInput) {
    const { title, platform } = updateGameInput;
    const updatedGame = await this.prisma.game.update({
      where: {
        id,
      },
      data: {
        title,
        platform,
      },
    });
    return updatedGame;
  }

  async remove(id: string) {
    const deletedGame = await this.prisma.game.delete({
      where: {
        id,
      },
    });
    return deletedGame;
  }
}
