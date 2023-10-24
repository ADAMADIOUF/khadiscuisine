import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'

// Register the PixiPlugin
gsap.registerPlugin(PixiPlugin)

const HeaderHome = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)

    // Create animations for title and description
    const titleAnimation = gsap.fromTo(
      '.banner-details h2',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1 }
    )
    const descriptionAnimation = gsap.fromTo(
      '.banner-details p',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1 }
    )

    // Build a timeline for both animations
    const tl = gsap.timeline()

    tl.add(titleAnimation, 0) // Add the title animation with a 0s delay
    tl.add(descriptionAnimation, 0.5) // Add the description animation with a 0.5s delay

    // Play the timeline
    tl.play()
  }, [])

  return (
    <div className={animate ? 'image-animation header-home' : ''}>
      <div className='banner-details'>
        <h3>Welcome to </h3>
        <h2>Khadi's cuisine</h2>
        <p>reservations:(+1)7349057013</p>
      </div>
    </div>
  )
}

export default HeaderHome
