import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({savedMovies, loadingSavedMovies, saveMovie, deleteMovie}){
  const initSearch = {
    movie: '',
    isShort: true
  }
  const [showCards, setShowCards] = useState(savedMovies);
  const [searchValues, setSearchValues] = useState(initSearch);
  const onChangeMovie = (e) => {
    setSearchValues({
      ...searchValues,
      movie: e.target.value,
    });
  }
  const onChangeType = () => {
    searchValues.isShort ? 
    setSearchValues({
      ...searchValues,
      isShort: false,
    }) :
    setSearchValues({
      ...searchValues,
      isShort: true,
    })
    updateMoviesCards()
  }
  const updateMoviesCards = () => {
    setShowCards(savedMovies.filter(card => (card.nameRU.toLowerCase().indexOf(searchValues.movie.toLowerCase())>=0)&&(searchValues.isShort||(card.duration>40))));
  }
  useEffect(() => {
    updateMoviesCards();
  }, [savedMovies])

  return(
    <main>
      <SearchForm 
        searchValues={searchValues}
        searchError=''
        onChangeMovie={onChangeMovie}
        onChangeType={onChangeType}
        updateMoviesCards={updateMoviesCards}
      />
      {loadingSavedMovies ?
        <Preloader/> :
        <MoviesCardList cardsArray={showCards} isSavedList={true} saveMovie={saveMovie} deleteMovie={deleteMovie}/>
      }
    </main>
  )
}

export default SavedMovies;