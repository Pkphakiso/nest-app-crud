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
    //works
    get(): Promise<User[]>{
        return this.usersRepository.find();
       
    }
    //works
    store(createUserDto: CreateUserDto){
      
        return this.usersRepository.save(createUserDto);
    } 
    //works
    update( updateUserDto:UpdateUserDto , userId:number){
        return this.usersRepository.update(userId, updateUserDto);
    }

    //not working??
    delete(id : number){
        return  this.usersRepository.delete(id);
    }
    //not working??
    findUser(id : number){
        return this.usersRepository.findOne({where: {id}});
    }

} 