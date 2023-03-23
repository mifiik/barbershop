import { faFacebook, faInstagram, faShopify, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './main.css';

function MainInformation() {
   return (
      <div className='informatoin'>
         <div className='left-inf'>
            <h3 className='left__title'>Contact Information</h3>
            <a className='left__dates' href="tel: (+49) 120-240-3600">(+49) 120-240-3600</a>
            <a className='left__dates left__dates--mb' href="#">hello@barber.beauty</a>
            <div className='social-media'>
               <FontAwesomeIcon className='social-media__ikon' icon={faFacebook} />
               <FontAwesomeIcon className='social-media__ikon' icon={faTwitter} />
               <FontAwesomeIcon className='social-media__ikon' icon={faInstagram} />
               <FontAwesomeIcon className='social-media__ikon' icon={faYoutube} />
               <FontAwesomeIcon className='social-media__ikon' icon={faWhatsapp} />
            </div>
         </div>

         <div className='right-inf'>
            <div className='open-daily'>
               <div className='open-item'>
                  <FontAwesomeIcon className='open-item__ikon' icon={faHouse} />
                  <h3 className='open-item__text'>OPEN DAILY</h3>
                  <p className='open-item__hours'>10:00 AM - 8:00 PM</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainInformation