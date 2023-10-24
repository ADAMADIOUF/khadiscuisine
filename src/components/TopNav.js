import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div className='top-nav-container section-center'>
        <article>
          <p>421 West Cross Street Ypsilanti, Mi 48197</p>
          <p>734-905-7013</p>
        </article>
        <article className='top-nav-links'>
          <span>
            <a
              href='https://www.facebook.com/profile.php?id=61552006883679'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillFacebook />
            </a>
          </span>
          <span>
            <a
              href='https://www.instagram.com/khadiscuisine/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillInstagram />
            </a>
          </span>
          <span>
            <a
              href='https://twitter.com/KhadisCuisine'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillTwitterSquare />
            </a>
          </span>
        </article>
      </div>
    </div>
  )
}

export default TopNav
