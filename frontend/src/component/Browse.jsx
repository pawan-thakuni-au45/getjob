import React from 'react'
import Navbar from './shared/Navbar'
import LatestJobCards from './LatestJobCards'

const randomJobs=[1,2,3]

const Browse = () => {
  return (
    <div>
    <Navbar></Navbar>
     <div className='max-w-7xl ma-auto mt-5'>
     <h1 className='font-bold text-xl'>Search Result {randomJobs.length}</h1>
     <div className='grid grid-cols-3 gap-4 mt-5'>
     
     {
        //instead of <LatestJobCards in need to put <Job> over here later will change it.
        randomJobs.map((item,index)=><LatestJobCards></LatestJobCards>)
      }
     </div>
     </div>
    </div>
  )
}

export default Browse