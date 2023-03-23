import React from 'react'
import './main.css';




function MainMap() {
   return (
      <div className='map'>
         <iframe className='map__frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.139308137275!2d13.399815615350832!3d52.53091364317351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85180d9075183%3A0xbba8c62c3dc41a7d!2sBarbabella%20Barbershop!5e0!3m2!1sru!2s!4v1678190968170!5m2!1sru!2s" loading="lazy"></iframe>
      </div>
   )
}

export default MainMap