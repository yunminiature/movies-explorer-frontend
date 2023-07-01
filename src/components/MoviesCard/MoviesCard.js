import React from 'react';
import {Link} from 'react-router-dom';
import './MoviesCard.css';
import { SHORT_DURATION } from '../../utils/constants';

function MoviesCard({card, isSavedList, saveMovie, deleteMovie}){
  const handleClick = () => {
    (card.saved || isSavedList) ? deleteMovie(isSavedList ? card._id : card.saved) : saveMovie({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: 'https://api.nomoreparties.co/'+card.image.url,
      trailer: card.trailerLink,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      thumbnail: 'https://api.nomoreparties.co/'+card.image.formats.thumbnail.url,
      movieId: card.id
    })
  }
  return(
    <li className='movies__card'>
      <Link className='movies__card-link' to={isSavedList ? card.trailer : card.trailerLink}>
        <img className='movies__card-poster' src={isSavedList ? card.image : `https://api.nomoreparties.co/${card.image.url}`} alt={card.nameRU}/>
      </Link>
      <div className='movies__card-info'>
        <h3 className='movies__card-title'>{card.nameRU}</h3>
        <p className='movies__card-duration'>{`${Math.floor(card.duration/SHORT_DURATION)}ч${card.duration%SHORT_DURATION}м`}</p>
        {
          isSavedList ?
          <div className='movies__card-delete' onClick={handleClick}/> :
          <div className={card.saved ? 'movies__card-status movies__card-status_active' : 'movies__card-status movies__card-status_inactive'} onClick={handleClick}/>
        }
      </div>                 
    </li>
  )
}

export default MoviesCard;