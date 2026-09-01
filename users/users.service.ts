import { Injectable } from '@nestjs/common';
import {setTimeout} from 'node:timers/promises'
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
}