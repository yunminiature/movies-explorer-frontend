import React from 'react';
import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

function NotFoundPage(){
  let navigate = useNavigate();
  return(
    <div className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <h3 className='not-found__subtitle'>Страница не найдена</h3>
      <button className='not-found__button' onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

export default NotFoundPage;