import React from 'react';
import './Profile.css';

function Profile({name, email}){
  return(
    <div className='profile'>
      <h2 className='profile__title'>Привет, {name}!</h2>
      <ul className='profile__user-data-items'>
        <li className='profile__user-data-item'>
          <h4 className='profile__user-data-title'>Имя</h4>
          <p className='profile__user-data-text'>{name}</p>
        </li>
        <li className='profile__user-data-item'>
          <h4 className='profile__user-data-title'>E-mail</h4>
          <p className='profile__user-data-text'>{email}</p>
        </li>
      </ul>
      <button className='profile__button profile__button_type_edit'>Редактировать</button>
      <button className='profile__button profile__button_type_exit'>Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;