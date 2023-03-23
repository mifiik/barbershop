import React from 'react'
import './main.css';



function MainDiscount() {
   return (
      <div className='discount'>
         <div className='discount-container'>
            <h1 className='discount__title'>Get 32% Discount</h1>
            <p className='discount__description'>on every second week of the month</p>
            <p className='discount__promo'>Promo Code: BarBerMo</p>
         </div>
      </div>
   )
}

export default MainDiscount