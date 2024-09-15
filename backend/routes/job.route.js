import express from 'express'  //it provides us router
import  {isAuthenticated } from '../middlewares/isAuthenticated.js'
const router=express.Router()
import { JobRegister,getAllJob,getJobById,getAdminJobs  } from '../controllers/job.controller.js'

router.route('/register').post(isAuthenticated,JobRegister)
router.route('/get').get(isAuthenticated,getAllJob)
router.route('/getJobById/:id').get(isAuthenticated,getJobById)
router.route('/getAdminJob').get(isAuthenticated,getAdminJobs)





export default router