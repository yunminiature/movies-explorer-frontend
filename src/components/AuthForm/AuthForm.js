import React from 'react';
import './AuthForm.css';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';

function AuthForm({title, children, submit, description, linkText, linkTo}){
  return(
    <div className='auth-form'>
      <img className='auth-form__logo' src={logo} alt='Логотип'/>
      <h2 className='auth-form__title'>{title}</h2>
      <form className='auth-form__form'>
        {children}
        <button className='auth-form__submit'>{submit}</button>
      </form>
      <p className='auth-form__description'>{description}<Link className='auth-form__link' to={linkTo}>{linkText}</Link></p>
    </div>
  )
}

export default AuthForm;