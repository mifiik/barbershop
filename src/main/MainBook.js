import React from 'react'
import './main.css';

function MainBook() {
   return (
      <div className='book'>
         <div className='book-container'>
            <div className='book-seat'>
               <h3 className='book-seat__title'>Book a seat</h3>
               <p className='book-seat__subtitle'>Please fill out the form and we get back to you</p>
            </div>
            <form className='form'>
               <div className='input-block'>
                  <input type='text' placeholder='Full name' />
                  <input type='tel' placeholder='Mobile 010-020-0340' />
                  <input type='time' defaultValue="11:20" min="00:00" max="24:00" />
                  <select className="select">
                     <option defaultValue="1">Select Branches</option>
                     <option defaultValue="2">Grunberger</option>
                     <option defaultValue="3">Behrenstrasse</option>
                     <option defaultValue="4">Weinbergsweg</option>
                  </select>
                  <input type='date' defaultValue="dd/mm/yyyy" min="2000-03-01" max="2050-12-31" />
                  <input type='number' placeholder='0' />
               </div>
               <div className="textarea">
                  <textarea className="comment" cols="50" rows="5" placeholder="Comment (Optionals)"></textarea>
               </div>
               <button type='submit'>Submit</button>
            </form>
         </div>
      </div>
   )
}

export default MainBook