import React from 'react';
import './Techs.css';

function Techs(){
  return(
    <section className='techs' id='techs'>
      <h2 className='section__title'>Технологии</h2>
      <div className='section__hr'/>
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
      <ul className='techs__items'>
        <li className='techs__item'>HTML</li>
        <li className='techs__item'>CSS</li>
        <li className='techs__item'>JS</li>
        <li className='techs__item'>React</li>
        <li className='techs__item'>Git</li>
        <li className='techs__item'>Express.js</li>
        <li className='techs__item'>mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;