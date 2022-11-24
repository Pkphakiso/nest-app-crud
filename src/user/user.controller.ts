import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "src/auth/local-auth.guard";
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
    // remeber the concistancy for param id
    @Get('/:id')
    getUser( @Param('id', ParseIntPipe) id: number){  
        return this.userService.findUser(id);
    }  
      

    // remeber the concistancy for param userId
    @Delete('/:userId')
    userDelete(@Param('userId',ParseIntPipe) userId: number){
        return  this.userService.delete(userId);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req){
        return req.user;
    }

    // @Get('/:userId')
    // getUser( @Param('userId',ParseIntPipe ) userId: number){  
    //     return this.userService.getUser( userId);
    // }  
}