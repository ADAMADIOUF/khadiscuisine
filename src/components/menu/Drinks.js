import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Drinks = () => {
  const [menuData, setMenuData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/.netlify/functions/products', {})
        console.log('Data from the serverless function:', response.data)
        setMenuData(response.data)
        setLoading(false) // Data has loaded successfully
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(error) // Set the error state
        setLoading(false) // Loading finished (even if there's an error)
      }
    }

    fetchData()
  }, [])

  
  const houseSpecialties = menuData.filter(
    (item) => item.categories === 'drinks'
  )


  return (
    <div className='section-center'>
      <div className='title-menu'>
        <h3>Drinks</h3>
      </div>
      <div className='menu-entrees'>
        {houseSpecialties.map((item) => (
          <div key={item.id}>
            <div className='menu-description'>
              <h3>{item.title}</h3>
              <p>{item.descone}</p>
            </div>
            <p className='menu-price'>${item.priceone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Drinks
