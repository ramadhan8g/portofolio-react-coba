import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pasfoto.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ramadhan Yandra Lubis</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div className="scroll__down">
          ScroolDown
        </div>
      </div>
    </header>
  )
}

export default Header