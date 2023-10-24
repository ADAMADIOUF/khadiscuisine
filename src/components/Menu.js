import React, { useEffect, useState } from 'react'
import HeaderMenu from './HeaderMenu'
import House from './menu/House'
import Entrees from './menu/Entrees'
import HeaderEntrees from './HeaderEntrees'
import Appetizer from './menu/Appetizer'
import Sandwich from './menu/Sandwich'
import Salad from './menu/Salad'
import Desserts from './menu/Dessert'
import HouseTwo from './menu/HouseTwo'
import Sides from './menu/Sides'
import Drinks from './menu/Drinks'
import HeaderSalad from './HeaderSald'

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 const [animate, setAnimate] = useState(false)

   useEffect(() => {
     
     setAnimate(true)
   }, [])
  return (
    <div className='section-center'>
      <HeaderMenu/>
      <div className='menu-container'>
        <div className='menu-item'>
          <Entrees />
        </div>
        <div className='menu-item'>
          <Appetizer />
        </div>
        <div className='menu-item'>
          <Sandwich />
        </div>
      </div>
      <HeaderEntrees />
      <div className='menu-container-1'>
        <div className='menu-item'>
          <Salad />
        </div>
        <div className='menu-item'>
          <Desserts />
        </div>
        <div className='menu-item'>
          <House />
        </div>
        <HeaderSalad />
        <div className='menu-container-1'>
          <div className='menu-item'>
            <HouseTwo />
          </div>
          <div className='menu-item'>
            <Sides />
          </div>
          <div className='menu-item'>
            <Drinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
