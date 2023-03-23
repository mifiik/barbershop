import React from 'react'
import './main.css';
import redo from '../img/main-foto/barber/first-barber.jpg'
import sam from '../img/main-foto/barber/second-barber.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// function BarberTemplate({ images, name }) {
//    return (
//       <div className='cards'>
//          <div className='cards__foto'>
//             <img src={images} />
//          </div>
//          <div className='social-ikons'>
//             <p className='social-ikons__name'>{name}</p>
//          </div>
//       </div>
//    )
// }

function BarberTemplate(props) {

   return (
      <div className='cards'>
         <div className='cards__foto'>
            <img src={props.images} />
         </div>
         <div className='social-ikons'>
            <p className='social-ikons__name'>{props.name}</p>
            <div className='ikons-container'>
               {/* <i class="fa-brands fa-instagram"></i> */}
               <FontAwesomeIcon className='ikon' icon={faFacebook} />
               <FontAwesomeIcon className='ikon' icon={faInstagram} />
               <FontAwesomeIcon className='ikon' icon={faWhatsapp} />
            </div>
         </div>
      </div>
   )
}

function MainBarbers() {
   return (
      <div className='barbers-block'>
         <div className='best'>
            <h3 className='best__title'>Best hairdressers</h3>
            <p className='best__text'>Gentlemen's Barber Shop is new Bootstrap v5 HTML CSS template by <a href="https://templatemo.com/page/1">TemplateMo</a> for everyone. There is a sidebar menu to navigate the one-page layout. You can feel free to adapt this template for your business.</p>
         </div>
         <div className='meets-barber'>
            <p className='meets-barber__title'>Meet Babers</p>
            <div className='container-cards'>
               {/* <div className='cards'>
                  <div className='cards__foto'>
                     <img src={redo} />
                  </div>
                  <div className='social-ikons'>
                     <p className='social-ikons__name'>Redo</p>
                  </div>
               </div>
               <div className='cards'>
                  <div className='cards__foto'>
                     <img src={redo} />
                  </div>
                  <div className='social-ikons'>
                     <p className='social-ikons__name'>Redo</p>
                  </div>
               </div> */}
               <BarberTemplate images={redo} name='Redo' />
               <BarberTemplate images={sam} name='Sam' />
            </div>
         </div>
      </div>
   )
}

export default MainBarbers