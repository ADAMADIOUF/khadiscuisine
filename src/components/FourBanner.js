import React, { useState } from 'react'
import a from '../assets/f1.png'
import b from '../assets/f2.png'
import Reservations from './Reservations'
const FourBanner = () => {
  const [showReservation, setShowReservation] = useState(false)

  const handleReservationClick = () => {
    setShowReservation(!showReservation)
  }

  return (
    <div className='four-banner section-center'>
      <div className='four-banner-container'>
        <article className='four-banner-card'>
          <h3>Visit Our</h3>
          <h2>restaurant</h2>
          <p>
            <span>Mon - Closed</span>
            <span>Tues- Sun: 12pm - 10pm</span>
            <button onClick={handleReservationClick} className='btn'>
              Reservation
            </button>
            {showReservation && (
              <Reservations setShowReservation={setShowReservation} />
            )}
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

export default FourBanner
