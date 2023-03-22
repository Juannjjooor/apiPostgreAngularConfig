import express from 'express'
import { userController } from '../controllers/user.controler'

const router = express.Router()

// TODO: Añadir endpoints

router.post('/add', userController.addUser)
router.get('/all', userController.getAllUsers)
router.get('/:id')

export default router
module.exports = router