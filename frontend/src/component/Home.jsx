import React from 'react'
import Navbar from './shared/Navbar'
import { HomeSection } from './HomeSection.jsx'
import { CatageryCrausal } from './CatageryCrausal'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeSection/>

      <CatageryCrausal/>
    </div>
  )
}

export default Home