import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({movies, loadingMovies, moviesError, saveMovie, deleteMovie}){
  const initSearch = {
    movie: localStorage.getItem('moviesSearchBar') ? localStorage.getItem('moviesSearchBar') : '',
    isShort: localStorage.getItem('moviesSearchToggle') === 'true'
  }
  const [showCards, setShowCards] = useState(localStorage.movies ? JSON.parse( localStorage.movies ) : []);
  const [searchValues, setSearchValues] = useState(initSearch);
  const [searchError, setSearchError] = useState('');
  const [rerender, setRerender] = useState(false);

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
    updateMoviesCards();
  }
  const updateMoviesCards = () => {
    if (!rerender){
      setRerender(true);
    } else if (searchValues.movie) {
      setShowCards(movies.filter(card => (card.nameRU.toLowerCase().indexOf(searchValues.movie.toLowerCase())>=0)&&(searchValues.isShort||(card.duration>40))));
      localStorage.setItem('movies', JSON.stringify(movies.filter(card => (card.nameRU.toLowerCase().indexOf(searchValues.movie.toLowerCase())>=0)&&(searchValues.isShort||(card.duration>40)))));
      localStorage.setItem('moviesSearchBar', searchValues.movie);
      localStorage.setItem('moviesSearchToggle', searchValues.isShort);
      setSearchError('')
    } else {
      setShowCards([]);
      setSearchError('Нужно ввести ключевое слово')
    }
  }
  useEffect(() => {
    updateMoviesCards()
  }, [movies])

  return(
    <main>
      <SearchForm 
        searchValues={searchValues}
        searchError={searchError}
        onChangeMovie={onChangeMovie}
        onChangeType={onChangeType}
        updateMoviesCards={updateMoviesCards}
      />
      {loadingMovies ?
        <Preloader/> :
        <>          
          <MoviesCardList cardsArray={showCards} isSavedList={false} saveMovie={saveMovie} deleteMovie={deleteMovie}/>
          <p className='movies__error'>{moviesError}</p>
        </>
      }
    </main>
  )
}

export default Movies;