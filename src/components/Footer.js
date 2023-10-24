import React, { useState } from 'react'
import a from "../assets/logo1.png"
import GalleryFooter from './GalleryFooter'
import Reservations from "./Reservations"
import TopNav from './TopNav'
const Footer = () => {
  const [showReservation, setShowReservation] = useState(false)

  const handleReservationClick = () => {
    setShowReservation(!showReservation)
  }

  return (
    <div className='footer'>
      <div className='footer-container section-center'>
        <article>
          <img src={a} alt='' className='logo' />
          <h3>sharing</h3>
          <p className='sharing'>
            Khadi's Restaurant Footer: Stay connected with the heart of flavor.
            In our footer, you'll find a gateway to our culinary world. Explore
            our menu, make reservations, and discover our story. Keep up with
            the latest news and events. Connect with us on social media, and
            join our community of food enthusiasts. Khadi's Restaurant Footer -
            Where Every Click is a Taste of Excellence
          </p>
          <button
            onClick={handleReservationClick}
            className='btn'
          >
            Reservation
          </button>
          {showReservation && (
            <Reservations setShowReservation={setShowReservation} />
          )}
        </article>

        <article>
          <h3>contact</h3>
          <h5>address:</h5>
          <p>421 West Cross Street Ypsilanti, Mi 48197</p>
          <h5>phone number:</h5>
          <p>734-905-7013</p>
          <h5>email</h5>
          <p>khadiscuisine1@gmail.com</p>
        </article>
      </div>
      <article>
        <h3>gallery</h3>
        <GalleryFooter />
      </article>
      <TopNav/>
      <p className='footer-date'>
        © {new Date().getFullYear()} adamadiouf. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
