import React, { useEffect } from 'react'
import FirstBanner from './FirstBanner'
import SecondBanner from './SecondBanner'
import ThirdBanner from './ThirdBanner'
import FourBanner from './FourBanner'
import FifthBanner from './FifthBanner'
import SixBanner from './SixBanner'
import LastBanner from './LastBanner'
import HeaderHome from './HeaderHome'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='home-page'>
      <HeaderHome/>
      <FirstBanner/>
      <SecondBanner/>
      <ThirdBanner/>
      <FourBanner/>
      <FifthBanner/>
      <SixBanner/>
      <LastBanner/>
    </div>
  )
}

export default Home
