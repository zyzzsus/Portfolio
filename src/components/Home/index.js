import React from 'react'
import home from '../../assets/images/home.png'
import './index.scss'
const Home = () => {
  return (
          <div className='child'>
              <img src={home} className='home'alt='home'/>
              <p className='scroll-text'> 
                  scroll down to view
              </p>
          </div>
  )
}

export default Home