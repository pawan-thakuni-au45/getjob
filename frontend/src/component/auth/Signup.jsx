import React from 'react'
import Navbar from '../shared/Navbar'

import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center mx-auto mx-w-7xl'>
                <form action="" className='w-1/2 border border-gray-400 rounded-md p-4 my-5'>
                    <h1 className='font-bold text-xl mb-5'>Signup</h1>
                    <div className='my-2'>
                        <Label className="my-7">
                            Full Name
                        </Label>
                        <Input type="text" placeholder="pawan thakuni"></Input>

                    </div>
                    <div className='my-2'>
                        <Label>
                            Email
                        </Label>
                        <Input type="email" placeholder="pawan@gmail.com"></Input>

                    </div>
                    <div className='my-2'>
                        <Label>
                            Password
                        </Label>
                        <Input type="password" placeholder="pawan@123"></Input>

                    </div>
                    <div className='my-2'>
                        <Label>
                            phoneNumber
                        </Label>
                        <Input type="Number" placeholder="pawan thakuni"></Input>

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
                        <div className='flex items-center gap-5'>
                          <Label>Profile</Label>
                            <input accept='image/*' type='file' className='cursor-pointer'>
                          
                          </input>
                        </div>
                    </div>
                    <Button type="submit" className="w-full border  my-9 text-xl">Signup</Button>
                    <span>already have an account ? <Link to="/login" className='text-blue-600'>Login</Link></span>




                </form>
            </div>
        </div>
    )
}

export default Signup