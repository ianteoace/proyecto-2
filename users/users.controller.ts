import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { get } from 'http'; 
import { CreateUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){
    }
    @Get('all')
    findAll(){
        return this.usersService.findAll();
    }
    @Get('all-two')
    findAll2(){
        return this.usersService.findAll();
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() data: CreateUserDto){
        return this.usersService.findAll();
    }
}
