import React from 'react';
import {Link} from 'react-router-dom';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe(){
  return(
    <section className='about-me' id='student'>
      <h2 className='section__title'>Студент</h2>
      <div className='section__hr'/>
      <div className='about-me__profile'>
        <div className='about-me__text-info'>
          <h3 className='about-me__title'>Юлия</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 22 года</p>
          <p className='about-me__text'>Я родилась и живу в Омске, закончила ОмГТУ по специальности "Прикладная информатика" и работаю в одной компании разработчиком чат и голосовых ботов.</p>
          <Link className='about-me__link' to='https://github.com/yunminiature'>GitHub</Link>
        </div>
        <img className='about-me__photo' src={photo} alt='Фото студента'/>
      </div>
      <div className='about-me__portfolio'>
        <h3 className='about-me__portfolio-title'>Портфолио</h3>
        <ul className='about-me__portfolio-items'>
          <li className='about-me__portfolio-item'><Link className='about-me__portfolio-link'>Статичный сайт</Link></li>
          <li className='about-me__portfolio-item'><Link className='about-me__portfolio-link'>Адаптивный сайт</Link></li>
          <li className='about-me__portfolio-item'><Link className='about-me__portfolio-link'>Одностраничное приложение</Link></li>
        </ul>
      </div>
      
    </section>
  )
}

export default AboutMe;