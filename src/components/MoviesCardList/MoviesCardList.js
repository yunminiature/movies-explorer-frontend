import React, {useState, useEffect} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({cardsArray, isSavedList, saveMovie, deleteMovie}){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showCount, setShowCount] = useState(16);

  const checkCount = () => {
    if (windowWidth >= 1280){
      setShowCount(16)
    } else if (windowWidth >= 768){
      setShowCount(8)
    } else {
      setShowCount(4)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', (() => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 3000);
    }));
    checkCount();
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
        <button className='movies__button' onClick={() => setShowCount(showCount+showCount)}>Ещё</button>
      }
    </div>
  )
}

export default MoviesCardList;