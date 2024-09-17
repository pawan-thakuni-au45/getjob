
import { Popover, PopoverContent,PopoverTrigger } from '@/components/ui/popover'
import { Avatar,AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import React from 'react'

const Navbar = () => {
    let user=false
  
  return (
    <div>
    <div className='flex justify-between'>
      <div className='font-bold text-4xl my-2'>
        <h1>Get<span className='text-red-600'>Job</span></h1>
      </div>
      <div>
      <div className='flex gap-5 '>
        <ul className='flex gap-5 font-medium my-2'>
           <li>Home</li>
           <li>Jobs</li>
           <li>Browse</li>

        </ul>
        {
          !user ? (
            <div className='my-0'>
            <Button variant="outline">Login</Button>
            <Button variant="outline" className="bg-violet-400">Signup</Button>

            </div>
          ):(

            <Popover>
            <PopoverTrigger asChild>
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            
          </Avatar>
          </PopoverTrigger>
              <PopoverContent className='w-80'>
                <h4 className='font-medium bg-slate-100'>pawan thakuni</h4>
                <p>the quik brown fox jumpde over the lazy hen
                </p>
                <div className='flex flex-col ml-0'>
                <Button variant="link">View Profile</Button>
                <Button variant="link">Logout</Button>
                </div>
    
              </PopoverContent>
            </Popover>

          )

        }
       
      
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar