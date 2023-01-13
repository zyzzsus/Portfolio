import React from 'react'
import './index.scss';
import Home from '../Home'
import About from '../About'
import Exp from '../Exp';
import Skill from '../Skill';
const Layout = () => {
  return (
    <>
        <Home/>
        <About/>
        <Exp/>
        <Skill/>
    </>
  )
}

export default Layout