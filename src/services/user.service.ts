import { NewGameDto, GameDto } from "../types";
import { UserRepository } from "../data/repositories/user.repository"
import { UserPojo } from "../data/models/user.model";


export class UserService {
    _userRepository : UserRepository

    constructor() {
        this._userRepository = new UserRepository()
    }

    async addUser(user : NewUserDto) : Promise<number> {
        const userPojo : UserPojo = this.parseDtoIntoPojo(user)
        const userPromise = await this._userRepository.addUser(userPojo).then(userId =>{ 
            return userId
        }).catch(error => {
            console.error(error)
            return -1
        })
        return userPromise
    }

    async getAllUsers() : Promise<UserDto[]> {
        const usersPromise = await this._userRepository.getAllUsers().then(usersAsPojo => {
            let usersAsDto : UserDto[] = []
            usersAsPojo.forEach(userAsPojo => {
                let userAsDto = this.parsePojoIntoDto(userAsPojo)
                usersAsDto.push(userAsDto)
        })   
        return usersAsDto
    }).catch(error => {
        console.error(error)
        throw error
    })

    return usersPromise
}

    async getUserById(id : number) : Promise<UserDto | undefined> {
        const userPromise = await this._userRepository.getUserById(id).then(userAsPojo => {
            if(!!userAsPojo)
                return this.parsePojoIntoDto(userAsPojo)
                else
                return undefined
            })
            
            return userPromise
    }

    parsePojoIntoDto(userPojo : UserPojo) : UserDto {
        const userDto : userDto = {
            userId: userPojo.dataValues.userId,
            username: userPojo.dataValues.username,
            password: userPojo.dataValues.password,
            active: userPojo.dataValues.active == 'Active',
            email: userPojo.dataValues.email
        }

        return userDto

    }

    parseDtoIntoPojo(userDto : NewUserDto) : UserPojo {
        let userPojo : UserPojo = new UserPojo()
        userPojo.setDataValue('userId', null)
        userPojo.setDataValue('username', userDto.username)
        userPojo.setDataValue('password', userDto.password)
        userPojo.setDataValue('email', userDto.email)
        userPojo.setDataValue('active', (userDto.active) ? 'Active' : 'Inactive')
        
        return userPojo
        
    }

}