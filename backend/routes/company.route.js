import express from 'express'
import  {isAuthenticated } from '../middlewares/isAuthenticated.js'
const router=express.Router()
import { registerCompany,getCompany,getCompanyById,updateCompany } from '../controllers/company.controller.js'

router.route('/register').post(isAuthenticated,registerCompany)
router.route('/get').get(isAuthenticated,getCompany)
router.route('/get/:id').get(isAuthenticated,getCompanyById)
router.route('/update/:id').put(isAuthenticated,updateCompany)





export default router