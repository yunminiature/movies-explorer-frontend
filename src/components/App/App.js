import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import * as mainApi from '../../utils/MainApi.js';
import * as moviesApi from '../../utils/MoviesApi.js';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './App.css';

function App () {
  const navigate = useNavigate();
  const initUserData = {
    name: '',
    email: ''
  }
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(initUserData);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [loadingSavedMovies, setLoadingSavedMovies] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signInError, setSignInError] = useState('');
  const [moviesError, setMoviesError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token){
      mainApi.getUserData()
        .then((userData) => {
          setUserData(userData);
          setLoggedIn(true);
        })
        .catch(err => console.log(err))

      setMoviesError('');
      setLoadingMovies(true);
      moviesApi.getMovies()
        .then((movies) => {
          setMovies(movies);
          setLoadingMovies(false);
        })
        .catch(() => {
          setMoviesError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })

      setLoadingSavedMovies(true);
      mainApi.getMovies()
        .then((movies) => {
          setSavedMovies(movies);
          setLoadingSavedMovies(false);
        })
        .catch((err) => console.log(err))
    }
  }, [isLoggedIn])

  const handleSignUp = (e, email, name, password) => {
    e.preventDefault();
    mainApi.signup(email, name, password)
      .then(() => {
        setSignUpError('');
        handleSignIn(e, email, password);
      })
      .catch(err => {
        console.log(err);
        setSignUpError(err.statusText)
      })
  }
  const handleSignIn = (e, email, password) => {
    e.preventDefault();
    mainApi.signin(email, password)
      .then((token) => {
        if (token){
          setSignInError('');
          navigate('/movies', {replace: true})
          setLoggedIn(true);
        }
      })
      .catch(err => {
        console.log(err);
        setSignInError(err.statusText);
      })   
  }
  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/', {replace: true});
  }
  const handleProfileEdit = (name, email) => {
    mainApi.updateUserData(name, email)
      .then((userData) => {
        setUserData(userData);
      })
      .catch((err) => console.log(err))
  }
  const handleSaveMovie = (movieData) => {
    mainApi.saveMovie(movieData)
      .then((movie) => {
        setSavedMovies([
          ...savedMovies, movie
        ])
        setMovies(movies.map(item => (item.id === movie.movieId ? { ...item, saved: movie._id } : item)))
      })
      .catch((err) => console.log(err))
  }
  const handleDeleteMovie = (movieId) => {
    mainApi.deleteMovie(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter((movie) => movie._id !== movieId))
        setMovies(movies.map(movie => (movie.saved === movieId ? { ...movie, saved: '' } : movie)))
      })
      .catch((err) => console.log(err))
  }

  return(
    <CurrentUserContext.Provider value={userData}>
      <div className='root'>
        <Routes>
          <Route path='*' element={<NotFoundPage/>} />
          <Route path='/' element={
            <>
              <Header isLoggedIn={isLoggedIn}/>
              <Main/>
              <Footer/>
            </>
          }/>
          <Route path='/movies' element={
            <>
              <Header isLoggedIn={isLoggedIn}/>
              <ProtectedRoute
                loggedIn={isLoggedIn}
                element={Movies}
                movies={movies}
                loadingMovies={loadingMovies}
                moviesError={moviesError}
                saveMovie={handleSaveMovie}
                deleteMovie={handleDeleteMovie}
              />
              <Footer/>
            </>
          }/>
          <Route path='/saved-movies' element={
            <>
              <Header isLoggedIn={isLoggedIn}/>
              <ProtectedRoute
                loggedIn={isLoggedIn}
                element={SavedMovies}
                savedMovies={savedMovies}
                loadingSavedMovies={loadingSavedMovies}
                saveMovie={handleSaveMovie}
                deleteMovie={handleDeleteMovie}
              />
              <Footer/>
            </>
          }/>
          <Route path='/signup' element={<SignUp onSignUp={handleSignUp} submitError={signUpError}/>}/>
          <Route path='/signin' element={<SignIn onSignIn={handleSignIn} submitError={signInError}/>}/>
          <Route path='/profile' element={
            <>
              <Header isLoggedIn={isLoggedIn}/>
              <ProtectedRoute
                loggedIn={isLoggedIn}
                element={Profile}
                onSubmit={handleProfileEdit}
                onSignOut={handleSignOut}
              />
            </>
          }/>
        </Routes>
        
      </div>
    </CurrentUserContext.Provider>    
  )
}

export default App;