import React from 'react'
import Button from '../../button/Button'
import '../../../style/components.scss'

import Serie1 from '../../../img/pnj/veiculos/serie1.png'
import Serie2 from '../../../img/pnj/veiculos/serie2.png'
import Serie3 from '../../../img/pnj/veiculos/serie-3.png'
import Serie4 from '../../../img/pnj/veiculos/serie-4.png'
import M3 from '../../../img/pnj/veiculos/m3.png'
import M5 from '../../../img/pnj/veiculos/m5.png'
import X2 from '../../../img/pnj/veiculos/x2.png'
import Z4 from '../../../img/pnj/veiculos/z4.png'

import FaceBook from '../../../img/svg/facebook.svg'
import WhatsApp from '../../../img/svg/whatsapp.svg'

const cars = [
  {
    img: Serie1,
    nome: 'BMW Serie 1'
  }, 
  {
    img: Serie2,
    nome: 'BMW Serie 2'
  }, 
  {
    img: Serie3,
    nome: 'BMW Serie 3'
  }, 
  {
    img: Serie4,
    nome: 'BMW Serie 4'
  }, 
  {
    img: M3,
    nome: 'BMW M3'
  }, 
  {
    img: M5,
    nome: 'BMW M5'
  }, 
  {
    img: X2,
    nome: 'BMW X2'
  }, 
  {
    img: Z4,
    nome: 'BMW Z4'
  },
]
const Cars = () => {
  return (
    <div className="containerCar">
      {cars.map((car) => (
        <div key={car.img} className="divCar">
          <img src={car.img} className="car" alt="car" />
          <p className="carsTitle">{car.nome}</p>
          <div className="btnCars">
            <Button Title="Cotação" />
            <button className="btnLigar">Ligar</button>
          </div>
          <p>
            Compartilhe:
            <a href="https://www.facebook.com/">
              <img src={FaceBook} className="FaceBook" alt="FaceBook" />
            </a>
            <a href="https://www.whatsapp.com/?lang=pt_br">
              <img src={WhatsApp} className="WhatsApp" alt="WhatsApp" />
            </a>
          </p>
        </div> 
      ))}
    </div>
  )
}

export default Cars
