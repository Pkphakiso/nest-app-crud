import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    // the consept @Body was introduced to exclude the use of @Req
    constructor(private userService: UserService){}
    @Get()
    getUsers(){
        return this.userService.get();
    }
   @Post()
    userStore(@Body() createUserDto: CreateUserDto){
        return this.userService.store(createUserDto);
    } 
    @Patch('/:userId')
    userUpdate(@Body() updateUserDto: UpdateUserDto , @Param('userId',ParseIntPipe ) userId: number){
        return this.userService.update(updateUserDto, userId  );
    }
    @Get('/:userId')
    getUser( @Param('userId', ParseIntPipe) userId: number){  
        return this.userService.findUser(userId);
    }  
    // @Get('/:userId')
    // getUser( @Param('userId',ParseIntPipe ) userId: number){  
    //     return this.userService.getUser( userId);
    // }    
    @Delete('/:userId')
    userDelete(@Param('userId',ParseIntPipe) userId: number){
        return  this.userService.delete(userId);
    }
}