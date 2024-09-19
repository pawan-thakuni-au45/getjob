import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

export const HomeSection = () => {
  return (
    <div className='text-center'>
    <div className='flex flex-col my-6'>
    <h1 className='text-red-500 bg-slate-200 mx-auto  text-bold rounded-full px-2 py-4'>Number One website for Job sekker and Job provider</h1>
    <h1 className='font-bold  text-5xl'>Search ,Apply & <br/>Get your <span className='text-red-500'>Dream Job</span></h1>
    <p>Your most welcome in this webnsite ,we are here to help you to find a good job accrding to your intrest</p>
    <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 my-6 rounded-full gap-4 item-center mx-auto'>
      <input type="text" placeholder='find your dream job' className='outline-none w-full' ></input>
      <Button><Search></Search></Button>
    </div>
    </div>
      
    </div>
  )
}
