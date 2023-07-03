import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header ({isLoggedIn}) {
  const [isOpenedMenu, setOpenedMenu] = useState(false);
  const openMenu = () => {
    setOpenedMenu(true);
  }
  const closeMenu = () => {
    setOpenedMenu(false);
  }
  return(
    <header className='header'>
      <Link to='/'><img className='header__logo' src={logo} alt='Логотип'/></Link>

      {!isLoggedIn ? 
        <>
          <Link className='header__link' to='/signup'>Регистрация</Link>
          <Link className='header__button' to='/signin'>Войти</Link>        
        </> :
        <>
          <ul className='header__navbar'>
            <li className='header__navbar-item'><NavLink className='header__navbar-link' to='/movies'>Фильмы</NavLink></li>
            <li className='header__navbar-item'><NavLink className='header__navbar-link' to='/saved-movies'>Сохраненные фильмы</NavLink></li>
            <li className='header__navbar-item header__navbar-item_type_profile'><NavLink className='header__navbar-link' to='/profile'>Аккаунт <div className='header__profile-icon'/></NavLink></li>
          </ul>          
          {isOpenedMenu ?
            <div className='header__menu'>
              <div className='header__menu-container'>
                <div className='header__menu-close' onClick={closeMenu}/>
                <ul className='header__menu-items'>
                  <li className='header__menu-item'><Link to='/' onClick={closeMenu}>Главная</Link></li>
                  <li className='header__menu-item'><Link to='/movies' onClick={closeMenu}>Фильмы</Link></li>
                  <li className='header__menu-item'><Link to='/saved-movies' onClick={closeMenu}>Сохранённые фильмы</Link></li>
                </ul>
                <Link className='header__profile-link' to='/profile' onClick={closeMenu}>Аккаунт <div className='header__profile-icon'/></Link>
              </div>
            </div> :
            <div className='header__menu-icon' onClick={openMenu}/>
          }
        </>        
      }
    </header>
  )
}

export default Header;