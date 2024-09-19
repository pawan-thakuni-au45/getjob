import { Badge } from '@/components/ui/badge'
import React from 'react'

const LatestJobCards = () => {
  return (
    <div className='shadow-xl rounded-md border border-gray-100 bg-white cursor-pointer'>
      <div>
       < h1 className='font-bold text-lg'>Company Name</h1>
       <p  className='text-sm text-gray-500'>India</p>
       </div>
       <div>
           <h1 className='font-bold text-md my-2'>Job Ttile</h1>
           <p className='text-sm font-bold'>this is frontend job ,</p>
       </div>
<div className='flex  mt-2 gap-2 items-center'>
   <Badge className={'text-blue-400 font-bold'} variant='ghost'>12 Positions</Badge>
   <Badge className={'text-green-400 font-bold'} variant='ghost'> Part time</Badge>
   <Badge className={'text-blue-400 font-bold'} variant='ghost'>12 LPA</Badge>

</div>
     
    </div>
  )
}

export default LatestJobCards