import React from 'react'
import './main.css';
import chair from '../img/main-foto/chair.jpg';

function MainPriceList() {
   return (
      <div className='price-list'>
         <div className='container-price'>
            <div className='left'>
               <div className='price'>
                  <h3 className='price__title'>Price List</h3>
                  <p className='price__subtitle'>Starting at $25</p>
               </div>
               <div className='list'>
                  <p className='list__text'>Haircut</p>
                  <p className='list__line'></p>
                  <p className='list__price'>$32.00</p>
               </div>
               <div className='list'>
                  <p className='list__text'>Beard Trim</p>
                  <p className='list__line'></p>
                  <p className='list__price'>$26.00</p>
               </div>
               <div className='list'>
                  <p className='list__text'>Razor Cut</p>
                  <p className='list__line'></p>
                  <p className='list__price'>$36.00</p>
               </div>
               <div className='list'>
                  <p className='list__text'>Shaves</p>
                  <p className='list__line'></p>
                  <p className='list__price'>$30.00</p>
               </div>
               <div className='list list--mb'>
                  <p className='list__text'>Styling / Color</p>
                  <p className='list__line'></p>
                  <p className='list__price'>$25.00</p>
               </div>
            </div>
            <div className='right'>
               <div className='right__foto'>
                  <img src={chair} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainPriceList