import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entity/user.entity";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    //find the users from the DB works
    get(): Promise<User[]>{
        return this.usersRepository.find();  
    }
    //store the user from the DB works
    store(createUserDto: CreateUserDto){
        return this.usersRepository.save(createUserDto);
    } 
    //update the user from the DB works
    update( updateUserDto:UpdateUserDto , userId:number){
        return this.usersRepository.update(userId, updateUserDto);
    }
    //delete the user from the DB working
    delete(id : number){
        return  this.usersRepository.delete(id);
    }
    // find the user from the DB working 
    findUser(id : number){
        return this.usersRepository.findOne({where: {id}});
    }
    // find the user to validate from the DB working 
    findAUser(username: string, password: string){
        return this.usersRepository.findOne({where: {username}});
    }

} 