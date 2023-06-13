import React, {useState} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({cardsArray, isSavedList}){
  const [showCount, setShowCount] = useState(16);
  return(
    <div className='movies__card-list'>
      <ul className='movies__cards'>
      {
        cardsArray.map((card, i) => {
          if(i>=showCount){
            return null
          } else return <MoviesCard key={i} card={card} isSavedList={isSavedList}/>
        })
      }
      </ul>
      {
        showCount < cardsArray.length &&
        <button className='movies__button' onClick={() => setShowCount(showCount+16)}>Ещё</button>
      }      
    </div>
  )
}

export default MoviesCardList;