import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer(){
  return(
    <footer className='footer'>
      <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__hr'/>
      <div className='footer__underline'>
        <p className='footer__copyright'>©2023</p>
        <ul className='footer__nav-items'>
          <li className='footer__nav-item'><Link className='footer__link' to='https://practicum.yandex.ru'>Яндекс.Практикум</Link></li>
          <li className='footer__nav-item'><Link className='footer__link' to='https://github.com/yunminiature'>Github</Link></li>
        </ul>        
      </div>      
    </footer>
  )
}

export default Footer;