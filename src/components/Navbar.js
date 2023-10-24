import React, { useState } from 'react'
import a from '../assets/logo1.png'
import { Link } from 'react-router-dom'
import Reservations from './Reservations'

const Navbar = () => {
  const [showReservation, setShowReservation] = useState(false)

  const handleReservationClick = () => {
    setShowReservation(!showReservation)
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to={`/`}>
          <img src={a} alt='' className='logo' />
        </Link>
        <ul className='nav-links'>
          <Link to={`/menu`}>
            <li>menu</li>
          </Link>
          <li>
            <button
              onClick={handleReservationClick}
              className='btn-handle-reservation'
            >
              Reservation
            </button>
            {showReservation && (
              <Reservations setShowReservation={setShowReservation} />
            )}
          </li>

          <Link to={`/history`}>
            <li>history</li>
          </Link>

          <Link to={`/categories`}>
            <li>menu categories</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
