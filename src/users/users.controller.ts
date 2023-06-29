import { Controller } from '@nestjs/common';
import { Delete, Get, Patch, Post } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
  @Get()
  fetchAll(): [] {
    // return all users
    return [];
  }

  @Get(':id')
  fetchUser(): {} {
    // return specific user
    return {};
  }

  @Post()
  create(user: {}): {} {
    // return created user
    return {};
  }

  @Patch(':id')
  update(id: string): {} {
    // return new copy of user
    return {};
  }

  @Delete(':id')
  delete(id: string) {
    // shows a message that user is deleted
  }
}
