import React, { useEffect, useState } from 'react'
import axios from 'axios'

const House = () => {
  const [menuData, setMenuData] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/.netlify/functions/products', {})
        console.log('Data from the serverless function:', response.data)
        setMenuData(response.data)
        
      } catch (error) {
        console.error('Error fetching data:', error)
        
      }
    }

    fetchData()
  }, [])

 
  const houseSpecialties = menuData.filter(
    (item) => item.categories === 'house specialities'
  )

  console.log(houseSpecialties)
  return (
    <div className='section-center'>
      <div className='title-menu'>
        <h3>house specialities</h3>
      </div>
      <div className='menu-entrees '>
        {houseSpecialties.map((item) => (
          <div key={item.id}>
            <div className='menu-description'>
              <h3>{item.title}</h3>
              <p>{item.descone}</p>
            </div>
            <p>${item.priceone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default House
