import React from 'react';
import './AboutProject.css';

function AboutProject(){
  return(
    <section className='about-project' id='about'>
      <h2 className='section__title'>О проекте</h2>
      <div className='section__hr'/>
      <ul className='about-project__columns'>
        <li className='about-project__column'>
          <h3 className='about-project__column-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__column-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__column'>
          <h3 className='about-project__column-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__column-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about-project__timeline'>
        <div className='about-project__timeline-cell about-project__timeline-cell_type_backend-week'>1 неделя</div>
        <div className='about-project__timeline-cell about-project__timeline-cell_type_frontend-week'>4 недели</div>
        <div className='about-project__timeline-cell about-project__timeline-cell_type_backend-description'>Back-end</div>
        <div className='about-project__timeline-cell about-project__timeline-cell_type_frontend-description'>Front-end</div>
      </div>
    </section>
  )
}

export default AboutProject;