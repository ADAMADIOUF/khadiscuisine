import React from 'react'
import a from '../assets/six1.png'
import b from '../assets/six2.png'
const SixBanner = () => {
  return (
    <div className='four-banner section-center'>
      <div className='four-banner-container'>
        <article className='four-banner-card'>
          <h5>Khadi's Restaurant: A Culinary Oasis in Ypsilanti"</h5>
          <h5>Savor Excellence at Khadi's Restaurant</h5>
          <p>
            Khadi's Restaurant, nestled at 421 West Cross Street, Ypsilanti, MI
            48197, is an extraordinary culinary destination. We invite you to
            experience a world of flavors, where every dish is crafted with love
            and expertise. Join us for an unforgettable dining journey.
          </p>
          <p>
            Khadi's Restaurant, located at 421 West Cross Street in Ypsilanti,
            MI 48197, is a haven for food enthusiasts. Step into an oasis of
            taste and hospitality, where each meal tells a story of passion and
            perfection. Make your reservation and embark on a gastronomic
            adventure with us.
          </p>
        </article>
        <article className='four-img'>
          <img src={a} alt='' />
        </article>
        <article className='four-img'>
          <img src={b} alt='' className='four-img-display' />
        </article>
      </div>
    </div>
  )
}

export default SixBanner
