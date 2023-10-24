import React, { useEffect } from 'react'
import a from '../assets/about2.webp'
import b from '../assets/about1.webp'
import c from '../assets/about3.webp'
import HeaderHistory from './HeaderHistory'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='about section-center' id='about'>
      <HeaderHistory/>
      <div className='about-container'>
        <article>
          <h3>Our Story</h3>
          <p>
            Connecting people with the flavors of our our amazing West African
            and internationally inspired cuisine.
          </p>
          <img src={a} alt='' />
        </article>
        <article>
          <img src={b} alt='' />
        </article>

        <article>
          <p>Khadi’s Cuisine founder, Mrs. Khadidiatou Faye</p>
          <p>
            Khadi’s Cuisine is a catering and food delivery service that is
            bringing the exotic, healthy, delicious, and affordable taste of
            West African gastronomy with a mix of International Mediterranean
            and European dishes in Ypsilanti and Ann Arbor Michigan and
            surrounding areas.
          </p>
          <p>
            We are building a reputation among African immigrants in Ypsilanti
            and Ann Arbor for their gastronomical needs. Many of our customers
            are African hair braiders and other African residents of Ypsilanti
            and Ann Arbor, but we're excited to bring the flavors of our culture
            to everyone in the community.{' '}
          </p>
          <p>
            Khadi’s Cuisine founder, Mrs. Khadidiatou Faye, is a Certified
            ServSafe and Food Allergen Manager. She also has a master’s degree
            in Sociology and long-standing experience in early childhood
            education and social work in West Africa. She has decided to share
            her African heritage with our community.
          </p>
          <p>We hope you enjoy our amazing authentic food! ​ Khadi</p>
        </article>
        <article>
          <img src={c} alt='' />
          <img src={a} alt='' />
        </article>
      </div>
    </div>
  )
}

export default About
