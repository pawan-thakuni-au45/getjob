import express from 'express'  //it provides us router
import  {isAuthenticated } from '../middlewares/isAuthenticated.js'
const router=express.Router()
import { register,login,updateProfile,logout } from '../controllers/user.controller.js'
import {z} from "zod"
//for form data we use multer
import { singleUpload } from '../middlewares/multer.js'

router.route('/register').post(singleUpload,register)
router.route('/login').post(login)
router.route('/logout').get(logout)


router.route('/profile/update').post(isAuthenticated,updateProfile)

export default router
