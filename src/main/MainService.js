import React from 'react'
import './main.css';
import boy from '../img/main-foto/services/boy.jpg'
import client from '../img/main-foto/services/client.jpg'
import their from '../img/main-foto/services/their-client.jpg'
import woman from '../img/main-foto/services/woman.jpg'


function ServiceTemplate({ foto, text, price }) {
   return (
      <div className='service-cards'>
         <div className='service-cards__foto'>
            <img src={foto} />
         </div>
         <div className='frame'>
            <h3 className='frame__name'>{text}</h3>
            <p className='frame__preis'>${price}</p>
         </div>
      </div>
   )
}

function MainService() {
   return (
      <div className='service'>
         <h3 className='service__title'>Services</h3>
         <div className='service-container'>
            <ServiceTemplate foto={woman} text='Hair cut' price='36.00' />
            <ServiceTemplate foto={their} text='Washing' price='25.00' />
            <ServiceTemplate foto={client} text='Shaves' price='30.00' />
            <ServiceTemplate foto={boy} text='Kids' price='25.00' />
         </div>
      </div>
   )
}

export default MainService