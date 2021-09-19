import React from 'react'
import Logo from '../../img/pnj/logos/logo-bmw-rio.svg'
import Tel from '../../img/svg/telefone.svg'
import TelDesktop from '../../img/svg/telefoneDesktop.svg'
import WhastappDesktop from '../../img/svg/whatsappDesktop.svg'
import Mundo from '../../img/svg/360.svg'

import '../../style/components.scss'
import Button from '../button/Button'

const Header = () => {
  return (
    <header className="containerHeader">
      <div className="header">
        <div className="tel">
          <img src={Tel} className="imgSvgTel" alt="telefone" />
          <p>(21)2042-4442</p>
        </div>
        <div className="headerDesktop">
          <div className="headerFlex">
            <a href="#" className="boxLink"><img src={TelDesktop} alt="Telefone" />(21)2042-4442</a>
            <a href="#" className="boxLink"><img src={Mundo} alt="Mundo" />TOUR VIRTUAL</a>
            <a href="#" className="boxLinkWhastapp"><img src={WhastappDesktop} />WHASTAPP</a>
          </div>
          <div className="headerFlexP">
            <p><a href="#"> 1</a></p>
            <p><a href="#"> 2</a></p>
            <p><a href="#"> 3</a></p>
            <p><a href="#"> 4</a></p>
            <p><a href="#"> 5</a></p>
            <p><a href="#"> 7</a></p>
            <p><a href="#"> 8</a></p>
            <p><a href="#"> X</a></p>
            <p><a href="#"> Z</a></p>
            <p><a href="#"> M</a></p>
            <p><a href="#"> I</a></p>
            <p><a href="#"> Plug-in-Hybrid</a></p>
          </div>
        </div>
        <img src={Logo} className="imgSvgLogo" alt="logo" />
      </div>
      <Button Title="Solicite uma cotação"/>
      <img src={WhastappDesktop} className="Whastapp" alt="Whastapp" />
    </header>
  )
}

export default Header
