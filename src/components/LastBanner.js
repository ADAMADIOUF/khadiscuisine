import React from 'react'
import a from '../assets/last.png'

const LastBanner = () => {
  return (
    <div className='four-banner section-center'>
      <div className='four-banner-container'>
        <article className='four-img last-banner-img'>
          <img src={a} alt='' />
        </article>

        <article className='four-banner-card last-banner-card'>
          <h2>Table of Elegance</h2>
          <h5>A unique experience</h5>

          <p>
            he 'Table of Elegance' is not just a piece of furniture; it's a
            canvas for your most cherished moments. Crafted with the finest
            materials and designed with a timeless aesthetic, this table sets
            the stage for gatherings, celebrations, and everyday life. Elevate
            your dining experience with the 'Table of Elegance' – where style
            and functionality meet.
          </p>
        </article>
      </div>
    </div>
  )
}

export default LastBanner
