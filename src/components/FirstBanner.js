import React from 'react'
import a from "../assets/first-banner.mp4"
import b from '../assets/first-banner1.png'
const FirstBanner = () => {
  return (
    <div className='first-banner section-center'>
      <div className='first-banner-title'>
        <h3>We are delighted to have you join us today</h3>
      </div>
      <div className='first-banner-container'>
        <article className='f-video'>
          <div class='video-container'>
            <video id='myVideo' controls loop>
              <source src={a} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </article>
        <article className='f-img'>
          <img src={b} alt='' />
          <div class='overlay-right'>
            <div class='text'>
              <p>
                Indulge in a world of culinary delights at Khadi's Restaurant.
                Our team of skilled chefs has crafted a menu that's sure to
                tantalize your taste buds and leave you craving for more. From
                delectable appetizers to mouthwatering main courses and
                irresistible desserts, we've got it all covered. Dining with us
                is not just a meal; it's an experience. Picture yourself
                savoring the finest ingredients, expertly prepared to
                perfection, in a cozy and welcoming ambiance. At Khadi's
                Restaurant, we prioritize quality, flavor, and your dining
                satisfaction above all else. Ordering from us is simple and
                convenient.!
              </p>
            </div>
          </div>
        </article>
        <article className='first-banner-card'>
          <p>
            Ordering from us is simple and convenient. Whether you're dining in
            or enjoying our dishes from the comfort of your own home, we're here
            to serve you.
          </p>
        </article>
      </div>
    </div>
  )
}

export default FirstBanner
