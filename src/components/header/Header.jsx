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
        <h5 className="text-light">I'm Front End Developer with little years of experience</h5>
        <h5 className="text-light">I enjoy building sites & apps. My focus is React & Next.js </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div className="scroll__down">
          ScroolDown
        </div>
        {/* Hello, I'm Khoeru. I'm a front-end developer with little years of experience. . */}
      </div>
    </header>
  )
}

export default Header