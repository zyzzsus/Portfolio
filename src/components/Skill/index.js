import React from 'react'
import './index.scss'
import skill from '../../assets/images/skill.png'
const Skill = () => {
  return (
    <div className='child'>
        <h1 className='head'>
            Skills & tools
        </h1>
        <a href="https://www.instagram.com/ui.duiwel/?hl=en" className='heading'> 
            UI Designing
        </a>
        <img src={skill} className='skill'alt='skill'/>
    </div>
  )
}

export default Skill