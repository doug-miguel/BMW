import React from 'react'
import LogoFooter from '../../img/pnj/logos/logo-alpes.png'
import bmwFooter from '../../img/pnj/logos/logo-bmw-rio.svg'


const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="textFooter">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a elementum orci, vitae commodo nibh. In vitae convallis nisl. Morbi rhoncus mattis purus sed commodo. Integer rhoncus ex risus. Proin efficitur elit nunc, ut pulvinar massa egestas in. Fusce quis quam viverra, pretium quam ac, consectetur lectus.
        </p>
        <p className="contentPrincipal"></p>
        <div className="footerBottom">
          <img src={bmwFooter} className="bmwFooter bmwFooterMobile" alt="bmwFooter" />
          <p>
            © Copyright © 2021 Lorem ipsum dolor sit amet.
          </p>
          <p className="logoFooter">
            Feito por: <img src={LogoFooter} alt="LogoFooter" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
