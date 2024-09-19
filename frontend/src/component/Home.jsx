import React from 'react'
import Navbar from './shared/Navbar'
import { HomeSection } from './HomeSection.jsx'
import { CatageryCrausal } from './CatageryCrausal'
import {  LatestJobs } from './LatestJobs'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeSection/>

      <CatageryCrausal/>
<LatestJobs></LatestJobs>
<Footer></Footer>
    </div>
  )
}

export default Home