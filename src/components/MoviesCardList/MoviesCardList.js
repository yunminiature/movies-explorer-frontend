import React, {useState, useEffect} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  CARDS_MAX_COUNT,
  CARDS_MED_COUNT,
  CARDS_MIN_COUNT,
  ADDING_MAX_COUNT,
  ADDING_MED_COUNT,
  ADDING_MIN_COUNT
} from '../../utils/constants'

function MoviesCardList({cardsArray, isSavedList, saveMovie, deleteMovie}){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showCount, setShowCount] = useState(CARDS_MAX_COUNT);
  const [addingCount, setAddingCount] = useState(ADDING_MAX_COUNT);

  const checkCount = () => {
    if (windowWidth >= 1280){
      setShowCount(CARDS_MAX_COUNT)
      setAddingCount(ADDING_MAX_COUNT)
    } else if (windowWidth >= 768){
      setShowCount(CARDS_MED_COUNT)
      setAddingCount(ADDING_MED_COUNT)
    } else {
      setShowCount(CARDS_MIN_COUNT)
      setAddingCount(ADDING_MIN_COUNT)
    }
  }
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    checkCount();
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth])
  
  return(
    <div className='movies__card-list'>
      <ul className='movies__cards'>
      {
        cardsArray.length ? cardsArray.map((card, i) => {
          if(i>=showCount){
            return null
          } else return <MoviesCard key={i} card={card} isSavedList={isSavedList} saveMovie={saveMovie} deleteMovie={deleteMovie}/>
        }) : <></>
      }
      </ul>
      {
        showCount < cardsArray.length &&
        <button className='movies__button' onClick={() => setShowCount(showCount+addingCount)}>Ещё</button>
      }
    </div>
  )
}

export default MoviesCardList;