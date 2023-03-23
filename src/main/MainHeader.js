import React from 'react';
import './main.css';
import styled from 'styled-components';
import chair from '../img/main-foto/chair.jpg';
// import menu from '../img/burger/menu.png';


const Button = styled.a`
color: white;
font-weight: 700;
font-size: 18px;
padding: 10px 20px;
border-radius: 100px;
box-sizing: border-box;
display: block;
width: fit-content;
`
const BorderButton = styled(Button)`
border: 2px solid white;
:hover{
   background-color: #FDBB2D;
   border: 2px solid #FDBB2D;
   transition: all 0.3s;
}
`
const RedButton = styled(Button)`
background-color: #c12828;          
border: 2px solid transparent;
:hover{
   background-color: #FDBB2D;
   transition: all 0.3s;
}
`
const YellowButton = styled(Button)`
background-color: #d6a354;          
border: 2px solid transparent;
:hover{
   background-color: #c12828;
   transition: all 0.3s;
}
`

function MainHeader() {
   // function showMenu() {
   //    console.log(123)
   // }
   return (
      <div className='main-header'>
         {/* <div onClick={showMenu} className='mobile-menu'>
            <img src={menu} alt='menu' />
         </div> */}
         <div className='description'>
            <h1 className='description__titile'>Barber <em>Shop</em></h1>
            <p className='description__text'>Get the most professional haircut for you</p>
            <div className='description-btn'>
               <BorderButton>About Us</BorderButton>
               <RedButton>What we do</RedButton>
            </div>
         </div>
         <div className='chair-foto'>
            <img src={chair} />
         </div>
         <div className='custom-block'>
            <div className='hurry-up'>
               <p className='hurry-up__text'>Hurry Up! Get good haircut.</p>
               <YellowButton>Book a seat</YellowButton>
            </div>
         </div>
      </div>
   )
}

export default MainHeader