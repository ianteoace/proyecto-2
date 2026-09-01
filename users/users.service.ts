import { Injectable, NotFoundException } from '@nestjs/common';
import {setTimeout} from 'node:timers/promises'
import { CreateUserDto } from './dto/users.dto';
export type User ={
    id: number;
    name:string;
    email: string;
    age: number;
    active: boolean;
}
@Injectable()
export class UsersService {
    private users: User[]=[ 
        {
        id: 1, name: "Sebastian Fournier", email:"Ianteoace@gmail.com", age: 22, active: true
        
        }
    ]
    async findAll(): Promise<User[]>{
        return this.users;
    }
    async create(body: CreateUserDto): Promise<User[]>{
        return[{id : 3, ...body},
            ...this.users
        ]
    }
    async remove(id: number): Promise<void>{
        const index = this.users.findIndex((user)=> user.id === id)

        if(index === -1){
            throw new NotFoundException('usuario con id ${id} no encontrado')
        }
        this.users.splice(index,1)
    }
}