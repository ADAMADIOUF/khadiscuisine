import React, { useState, useEffect } from 'react'
import {
  AiFillCloseCircle,
  AiFillPauseCircle,
  AiFillPlayCircle,
} from 'react-icons/ai'

import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from 'react-icons/tb'
import a from '../assets/t1.png'
import b from '../assets/t2.png'
import c from '../assets/t3.png'
import d from '../assets/t4.png'
import { Link } from 'react-router-dom'

const ThirdBanner = () => {
  const images = [a, b, c, d]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        if (currentIndex === images.length - 1) {
          setCurrentIndex(0)
        } else {
          setCurrentIndex(currentIndex + 1)
        }
      }, 3000) 
      return () => clearInterval(timer)
    }
  }, [currentIndex, isPlaying, images])

  const openGallery = (index) => {
    setCurrentIndex(index)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
  }

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='third-banner section-center'>
      <div className='third-banner-container'>
        <div className='third-banner-img'>
          {images.map((image, index) => (
            <article key={index} onClick={() => openGallery(index)}>
              <img src={image} alt='' />
            </article>
          ))}
        </div>
        <div className='third-banner-content'>
          <h3>Discover</h3>
          <h2>OUR MENU</h2>
          <p>421 West Cross Street Ypsilanti, MI 48197</p>
          <p>Phone: 734-905-7013</p>
          <Link to={`/menu`}>
            {' '}
            <button className='btn'>menu</button>
          </Link>
        </div>
      </div>
      {isGalleryOpen && (
        <div className='gallery'>
          <img src={images[currentIndex]} alt='' />

          <button className='play-pause' onClick={togglePlay}>
            {isPlaying ? (
              <AiFillPauseCircle className='icon-gallery' />
            ) : (
              <AiFillPlayCircle className='icon-gallery' />
            )}
          </button>
          <div className='container-btn'>
            <button className='prev-btn' onClick={prevImage}>
              <TbPlayerTrackNextFilled className='icon-gallery' />
            </button>

            <button className='next-btn' onClick={nextImage}>
              <TbPlayerTrackPrevFilled className='icon-gallery' />
            </button>
          </div>
          <button className='close' onClick={closeGallery}>
            <AiFillCloseCircle className='icon-gallery' />
          </button>
        </div>
      )}
    </div>
  )
}

export default ThirdBanner
