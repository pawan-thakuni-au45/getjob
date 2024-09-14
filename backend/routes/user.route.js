import express from 'express'  //it provides us router
import  {isAuthenticated } from '../middlewares/isAuthenticated.js'
const router=express.Router()
import { register,login,updateProfile } from '../controllers/user.controller.js'

router.route('/register').post(register)
router.route('/login').post(login)

router.route('/profile/update').post(isAuthenticated,updateProfile)

export default router
