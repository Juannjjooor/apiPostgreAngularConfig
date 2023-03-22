import { UserPojo } from "../models/user.model"
import { connect } from "../config/user.db.config"
import { NewUserDto } from "../../types"

export class UserRespository {
    _database : any = {}
    _userRespository : any

    constructor() {
        this._database = connect()
        this._userRespository = this._database._database.sequelize.getRepository(UserPojo)
    }

    async addUser(newUser : UserPojo) : Promise<number> {
        try {
            newUser = await this._userRespository.create(newUser)
            return newUser.id
            
        } catch (error) {
            console.error(error)
            return -1
            
        }
        

    }

    async getAllUsers() : Promise<UserPojo[]> {
        try {
            return await this._userRespository.findAll()
            
        } catch (error) {
            console.error(error)
            return []
            
        }
    }

    async getUserById(id : number) : Promise<UserPojo | undefined> {
        try {
            return await this._userRespository.findByPk(id)
            
        } catch (error) {
            console.error(error)
            return undefined
            
        }
    }

}