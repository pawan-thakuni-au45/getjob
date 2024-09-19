import React from 'react'
import LatestJobCards from './LatestJobCards'


const randomJobs=[1,2,3,4,5,6,7,8]

export const LatestJobs = () => {
  return (
    <div>
    <h1 className='text-bold text-red-500 text-3xl'>Job Openings</h1>
    <div className='grid grid-cols-3 gap-4 my-5'>
    {
      randomJobs.map((item,index)=><LatestJobCards></LatestJobCards>)
    }
    </div>
  
    </div>
  )
}
