import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
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
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    eliminarUsuario(@Param('id') id: string){
        return{
            mensaje: 'Usuario con ID ${id} elimando con exito'
        };
    }

}
