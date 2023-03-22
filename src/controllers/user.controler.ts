import { UserService } from "./../services/user.service"
const userService: UserService = new UserService()

export const userController = {
    addUser: (req: any, res: any) => {
        try {
            const newUser = req.body
            userService.addUser(newUser).then(result => {
                res.json(result)
            })
            
        } catch (excepcion) {
            console.error(excepcion)
            res.sendStatus(500)
            
        }
        
    },

    getAllUsers: (_req: any, res: any) => {
        userService.getAllUsers().then(result => {
            res.json(result)
        }).catch(excepcion => {
            console.error(excepcion)
            res.sendStatus(500)
        })
    },

    getUsersId: (req: any, res: any) => {
                try {
            const userId = +req.params.id
            userService.getUserById(userId).then(result => {
                res.json(result)
            })
            
        } catch (excepcion) {
            console.error(excepcion)
            res.sendStatus(500)
            
        }
    },

    }