



import React from 'react'
import Navbar from '../shared/Navbar'

import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center   '>
                <form action="" className='w-1/2 border border-gray-400 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5 mx-0'>Login</h1>
                    
                    <div className='my-2 '>
                        <Label className="px-1">
                            Email
                        </Label>
                        <Input type="email" placeholder="pawan@gmail.com"></Input>

                    </div>
        
                    <div className='my-2 '>
                        <Label className="pl-0">
                            Password
                        </Label>
                        <Input type="password" placeholder="pawan@123"></Input>

                    </div>
                   

                    <div className='flex justify-between gap-5'>
                        <RadioGroup className="flex gap-4 items-center" >
                            <div className="flex items-center space-x-2">
                            <input type="radio" name="role" value="student" className='cursor-pointer'>
                            
                            </input>
                                
                                <Label htmlFor="r1">student </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                             
                             <input type="radio" name="role" value="recruiter" className='cursor-pointer'>
                            
                             </input>
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