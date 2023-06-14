import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';

function App () {
  const initUserData = {
    name: 'Юлия',
    email: 'yun.miniature@yandex.ru'
  }
  // булевый стейт в компонентах захардкожен на этапе level-2: false в Main и true во всех остальных 
  //const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(initUserData);
  return(
    <div className='root'>
      <Routes>
        <Route path='*' element={<NotFoundPage/>} />
        <Route path='/' element={
          <>
            <Header isLoggedIn={false}/>
            <Main/>
            <Footer/>
          </>
        }/>
        <Route path='/movies' element={
          <>
            <Header isLoggedIn={true}/>
            <Movies/>
            <Footer/>
          </>
        }/>
        <Route path='/saved-movies' element={
          <>
            <Header isLoggedIn={true}/>
            <SavedMovies/>
            <Footer/>
          </>
        }/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/profile' element={
          <>
            <Header isLoggedIn={true}/>
            <Profile name={userData.name} email={userData.email}/>
          </>
        }/>
      </Routes>
      
    </div>
  )
}

export default App;