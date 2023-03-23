import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './footer.css'



function FooterContactBlock({ title, address }) {
   return (
      <div className='contact'>
         <h3 className='contact__title'>{title}</h3>
         <p className='contact__address'>{address}</p>
      </div>
   )
}


function Footer() {
   return (
      <div className='footer'>
         <div className='wrapp-footer'>
            <h3 className='footer__title'>Our Branches</h3>
            <div className='contact-container'>
               <FooterContactBlock title='Grünberger' address='Grünberger Str. 31, 10245 Berlin, Germany' />
               <FooterContactBlock title='Behrenstraße' address='Behrenstraße 27, 10117 Berlin, Germany' />
               <FooterContactBlock title='Weinbergsweg' address='Weinbergsweg 23, 10119 Berlin, Germany' />
            </div>
            <div className='copyright'>
               <p className='copyright__text'>Copyright © 2036 Barber Shop - Design: <a href="https://templatemo.com/page/1">TemplateMo</a></p>
               <a href='#'>
               <FontAwesomeIcon className='ikon__footer' icon={faArrowAltCircleUp} />
               </a>
            </div>
         </div>
         <div className='end-bottom'></div>
      </div>
   )
}
export default Footer




