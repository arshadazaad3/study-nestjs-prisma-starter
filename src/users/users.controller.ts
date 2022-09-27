import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('users')
  getUsers(): string {
    return this.service.getUsers();
  }
}
