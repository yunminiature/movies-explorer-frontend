import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import poster from '../../images/poster.jpg';

function SavedMovies(){
  const cardsArray = Array(3).fill({
    title: '33 слова о дизайне',
    duration: '1ч42м',
    posterUrl: poster,
    added: Math.random() < 0.5, //рандом - все карточки в "добавленном" или нет
  });
  return(
    <main>
      {/* <Preloader/> */}
      <SearchForm/>
      <MoviesCardList cardsArray={cardsArray} isSavedList={true}/>
    </main>
  )
}

export default SavedMovies;