import React from 'react';
import './MoviesCard.css';

function MoviesCard({card, isSavedList}){
  return(
    <li className='movies__card'>
      <img className='movies__card-poster' src={card.posterUrl} alt={card.title}/>
      <div className='movies__card-info'>
        <h3 className='movies__card-title'>{card.title}</h3>
        <p className='movies__card-duration'>{card.duration}</p>
        {
          isSavedList ?
          <div className='movies__card-delete'/> :
          <div className={card.added ? 'movies__card-status movies__card-status_active' : 'movies__card-status movies__card-status_inactive'}/>
        }
      </div>           
    </li>
  )
}

export default MoviesCard;