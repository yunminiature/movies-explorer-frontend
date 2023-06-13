import React, { useState } from 'react';
import FilterToggle from '../FilterToggle/FilterToggle';
import './SearchForm.css';

function SearchForm(){
  const [movie, setMovie] = useState('');
  const [isShort, setIsShort] = useState(true);
  const onChangeMovie = (e) => {
    setMovie(e.target.value)
  }
  const toggleIsShort = () => {
    isShort ? setIsShort(false) : setIsShort(true);
  }
  return(
    <div className='search-form'>
      <form className='search-form__form'>
        <input className='search-form__input' type='text' name='movie' value={movie} placeholder='Фильм' onChange={onChangeMovie}/>
        <button className='search-form__submit'>Найти</button>
      </form>
      <div className='search-form__toggle'>
        <FilterToggle value={isShort} onChange={toggleIsShort}/>
        <p className='search-form__toggle-description'>Короткометражки</p>
      </div>
      
    </div>
  )
}

export default SearchForm;