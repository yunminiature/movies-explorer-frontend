import React from 'react';
import FilterToggle from '../FilterToggle/FilterToggle';
import './SearchForm.css';

function SearchForm({searchValues, searchError, onChangeMovie, onChangeType, updateMoviesCards}){
  const handleSubmit = (e) => {
    e.preventDefault();
    updateMoviesCards()
  }
  return(
    <div className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <input className='search-form__input' type='text' name='movie' value={searchValues.movie} placeholder='Фильм' onChange={onChangeMovie}/>
        <button className='search-form__submit'>Найти</button>
      </form>
      <p className='search-form__error'>{searchError}</p>
      <div className='search-form__toggle'>
        <FilterToggle value={searchValues.isShort} onChange={onChangeType}/>
        <p className='search-form__toggle-description'>Короткометражки</p>
      </div>
      
    </div>
  )
}

export default SearchForm;