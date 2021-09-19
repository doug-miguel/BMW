import React from 'react'
import BanerMobile from '../../img/pnj/banners/mobile-banner.png'
import BannerDesktop from '../../img/pnj/banners/desktop-.jpg'
import Cars from './Cars.jsx/Cars'

import '../../style/components.scss'


const Body = () => {
  return (
    <section className="conteudoCars">
      <img src={BanerMobile} className="BanerMobile" alt="BanerMobile" />
      <img src={BannerDesktop} className="BannerDesktop" alt="BannerDesktop" />
      <h1>ESCOLHA SUA BMW</h1>
      <Cars />
    </section>
  )
}

export default Body
