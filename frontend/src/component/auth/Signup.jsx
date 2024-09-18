import React, { useState } from 'react'
import Navbar from '../shared/Navbar'

import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from '@/components/ui/sonner.jsx'



const Signup = () => {
    const navigae=useNavigate()
    const [input,setInput]=useState({
        fullName:"",
        email:"",
        password:"",
        phoneNumber:"",
        role:"",
        file:""

    })

    const changeEventHandler =(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const changeFileHandler =(e)=>{
        setInput({...input,file:e.targe.files?.[0]})
    }

    //api call --asy'nc
    const submitHandler =async(e)=>{
        e.preventDefault()
        const formdata=new FormData()
        formdata.append("fullName",input.fullName)
        formdata.append("email",input.email)
        formdata.append("password",input.password)
        formdata.append("phoneNumber",input.phoneNumber)
        formdata.append("role",input.role)
        if(input.file){
            formdata.append("file",input.file)
        }
        


    try{

        const res=await axios.post(`${USER_END_POINT}/register`,formdata,{
            headers:{
                "Content-type":"multipast/form-data"
            },
            withCredentials:true,
        })
        if(res.data.success){
            navigae('/login')
            toast.success(res.data.message)
        }
    }catch(error){

    }
        

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center mx-auto mx-w-7xl'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-400 rounded-md p-4 my-5'>
                    <h1 className='font-bold text-xl mb-5'>Signup</h1>
                    <div className='my-2'>
                        <Label className="my-7">
                            Full Name
                        </Label>
                        <Input type="text" value={input.fullName} name="fullName" onChange={changeEventHandler} placeholder="pawan thakuni"></Input>

                    </div>
                    <div className='my-2'>
                        <Label>
                            Email
                        </Label>
                        <Input type="email" value={input.email} name="email" onChange={changeEventHandler} placeholder="pawan@gmail.com"></Input>

                    </div>
                    <div className='my-2'>
                        <Label>
                            Password
                        </Label>
                        <Input type="password" value={input.password} name="password" onChange={changeEventHandler} placeholder="pawan@123"></Input>

                    </div>
                    <div className='my-2'>
                        <Label>
                            phoneNumber
                        </Label>
                        <Input type="phoneNumber" value={input.phoneNumber} name="phoneNumber" onChange={changeEventHandler} placeholder="pawan thakuni"></Input>

                    </div>

                    <div className='flex justify-between gap-5'>
                        <RadioGroup className="flex gap-4 items-center" >
                            <div className="flex items-center space-x-2">
                            <input type="radio" name="role" value="student" checked={input.role==="student"} onChange={changeEventHandler} className='cursor-pointer'>
                            
                            </input>
                                
                                <Label htmlFor="r1">student </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                             
                             <input type="radio" name="role" value="recruiter" checked={input.role==="recruiter"} onChange={changeEventHandler} className='cursor-pointer'>
                            
                             </input>
                                <Label htmlFor="r2">recruiter</Label>
                            </div>
                            
                        </RadioGroup>
                        <div className='flex items-center gap-5'>
                          <Label>Profile</Label>
                            <input accept='image/*' type='file' onChange={changeFileHandler} className='cursor-pointer'>
                          
                          </input>
                        </div>
                    </div>
                    <Button type="submit" className="w-full border  my-9 text-xl">Signup</Button>
                    <span>Already have an account ? <Link to="/login" className='text-blue-600'>Login</Link></span>




                </form>
            </div>
        </div>
    )
}

export default Signup