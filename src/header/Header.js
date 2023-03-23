import './header.css'
import logo from '../img/header-foto/logo.png';
import React, { useState } from 'react';
import menu from '../img/burger/menu.png';
import close from '../img/burger/close.png';


function Header() {
   const [burger, setBurger] = useState(true)
   console.log(burger)

   function burgerMenu() {
      setBurger(!burger)
   }
   const headerStyle = (burger) ? 'header' : 'header-active'
   const fotoBurger = (burger) ? menu : close
   return (
      <>
         <div className={headerStyle}>
            <div className="header__logo">
               <img src={logo} alt="logo" />
            </div>
            <ul className="list-head">
               <ul>
                  <li><a href="#">home</a></li>
                  <li><a href="#">our story</a></li>
                  <li><a href="#">services</a></li>
                  <li><a href="#">price list</a></li>
                  <li><a href="#">contact</a></li>
               </ul>
            </ul>
         </div>
         <h1>Hello!!!</h1>
         <div className='foto-burger' onClick={burgerMenu}>
            <img src={fotoBurger} alt='menu' />
         </div>
      </>
   )
}
export default Header