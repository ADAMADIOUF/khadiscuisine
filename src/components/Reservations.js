import React, { useEffect, useState } from 'react'
import{AiFillCloseCircle} from "react-icons/ai"
import axios from 'axios'

const Reservations = ({ setShowReservation }) => {

  const [showForm, setShowForm] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const [formData, setFormData] = useState({
  name: '',
  email: '',
  date: '',
  time: '',
  guests: '',
  numéroDeTéléphone: '', // Changed the field name to French
})

const [successMessage, setSuccessMessage] = useState('')

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData({
    ...formData,
    [name]: value,
  })
}

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const response = await axios.post(
      '/.netlify/functions/reservations',
      formData
    )
    console.log('Réservation envoyée:', response.data)

    setSuccessMessage('Reservation sent successfully.')

    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      phoneNumber: '',
    })
    setShowForm(false)

    setTimeout(() => {
      setSuccessMessage('')
      // Reload the page to make the navigation link work
      window.location.reload()
    }, 3000)
  } catch (error) {
    console.error("Erreur lors de l'envoi de la réservation:", error)
  }
}


  const handleCloseClick = () => {
    setShowForm(false)
    setShowReservation(false) 
  }

  return (
    <div className='reservation-container'>
      {showForm ? (
        <div className='reservation-form'>
          <h2>Make a Reservation</h2>

          <form onSubmit={handleSubmit}>
            <div className='reservation-input'>
              <label htmlFor='name'> First name :</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='reservation-input'>
              <label htmlFor='email'>E-mail :</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='reservation-input'>
              <label htmlFor='number'>phone number :</label>
              <input
                type='text' // Change the type to "text"
                id='number'
                name='phoneNumber' // Update the name to match your formData property
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className='reservation-input'>
              <label htmlFor='date'>Date :</label>
              <input
                type='date'
                id='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className='reservation-input'>
              <label htmlFor='time'>times :</label>
              <input
                type='time'
                id='time'
                name='time'
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className='reservation-input'>
              <label htmlFor='guests'>number of guests :</label>
              <input
                type='number'
                id='guests'
                name='guests'
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
          <button onClick={handleCloseClick} className='close-button'>
            <AiFillCloseCircle />
          </button>
        </div>
      ) : null}
      <div>
        {successMessage && (
          <div className='success-message'>{successMessage}</div>
        )}
      </div>
    </div>
  )
}

export default Reservations
