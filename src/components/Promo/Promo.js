import React from 'react';
import './Promo.css';

function Promo(){
  return(
    <div className='promo'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <ul className='promo__nav-items'>
          <li className='promo__nav-item'><a className='promo__link' href='#about'>О проекте</a></li>
          <li className='promo__nav-item'><a className='promo__link' href='#techs'>Технология</a></li>
          <li className='promo__nav-item'><a className='promo__link' href='#student'>Студент</a></li>
        </ul>
      </div>
  )
}

export default Promo;