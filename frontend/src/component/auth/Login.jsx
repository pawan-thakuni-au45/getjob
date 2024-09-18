



import React, { useState } from 'react'
import Navbar from '../shared/Navbar'

import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Import } from 'lucide-react'
import axios from 'axios'
import {USER_API_END_POINT} from '@/constant/userRegisterApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'



const Login = () => {

    const [input,setInput]=useState({
       
        email:"",
        password:"",
        role:""
        

    })
    const navigate=useNavigate()

    const changeEventHandler =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const submitHandler = async(e)=>{
        e.preventDefault()
        const formdata=new FormData()
       
        formdata.append("email",input.email)
        formdata.append("password",input.password)
        
        formdata.append("role",input.role)
       
        


    try{

        const res = await axios.post(`${USER_API_END_POINT}/login `,input,{
         
            headers:{
                "Content-Type":"application/json"
            },
             withCredentials:true,
           
        }) 
        if(res.data.success){
            navigate("/");
            toast.success(res.data.message);
           
        }
       
    }catch(error){
console.log(error)
toast.error(error.response.data.message)

    }
   
  
        

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center   '>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-400 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5 mx-0'>Login</h1>
                    
                    <div className='my-2 '>
                        <Label className="px-1">
                            Email
                        </Label>
                        <Input type="email" value={input.email} name="email" onChange={changeEventHandler} placeholder="pawan@gmail.com"></Input>

                    </div>
        
                    <div className='my-2 '>
                        <Label className="pl-0">
                            Password
                        </Label>
                        <Input type="password" value={input.password} name="password" onChange={changeEventHandler} placeholder="pawan@123"></Input>


                    </div>
                   

                    <div className='flex justify-between gap-5'>
                        <RadioGroup className="flex gap-4 items-center" >
                            <div className="flex items-center space-x-2">
                            <Input type="radio" name="role" value="student" checked={input.role === 'student'}  onChange={changeEventHandler} className='cursor-pointer'>
                            
                            </Input>
                                
                                <Label htmlFor="r1">student </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                             
                             <Input type="radio" name="role" value="recruiter" checked={input.role === 'recruiter'} onChange={changeEventHandler} className='cursor-pointer'>
                            
                             </Input>
                                <Label htmlFor="r2">recruiter</Label>
                            </div>
                            
                        </RadioGroup>
                       
                    </div>
                    <Button type="submit" className="w-full border  my-9 text-xl">Login</Button>
                    <span>new here ?  <Link to="/signup" className='text-blue-600'>Signup</Link></span>




                </form>
            </div>
        </div>
    )
}

export default Login