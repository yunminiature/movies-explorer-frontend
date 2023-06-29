import React, { useState } from 'react';
import './Profile.css';
import { regEmail } from '../../utils/constants';

function Profile({userName, userEmail, onSubmit, onSignOut}){
  const userData = {
    name: userName,
    email: userEmail
  }
  const initialErrors = {
    nameError: '',
    emailError: ''
  }
  const [values, setValues] = useState(userData);
  const [errors, setErrors] = useState(initialErrors);
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validateInput({ name, value });
  }
  const validateInput = ({ name, value }) => {
    switch(name){
      case 'name':
        if (value.length===0){
          setErrors({...values,
            nameError:'Поле "Имя" не может быть пустым',
          })
        } else if (value.length<2 || value.length>30){
          setErrors({...values,
            nameError:'Поле "Имя" должно содержать от 2 до 30 символов',
          })
        } else setErrors({...values,
          nameError:'',
        });
        break;
      case 'email':
        if (!regEmail.test(value)){
          setErrors({...values,
            emailError:'Поле "E-mail" должно содержать адрес электронной почты',
          });
        } else setErrors({...values,
          emailError:'',
        });
        break;
      default:
    }
  }
  return(
    <div className='profile'>
      <h2 className='profile__title'>Привет, {userName}!</h2>
      <ul className='profile__user-data-items'>
        <li className='profile__user-data-item'>
          <h4 className='profile__user-data-title'>Имя</h4>
          <input className="profile__user-data-input" type="text" value={values.name} id="name-input" name='name' minLength="2" maxLength="30" required onChange={onChangeInput}/>
        </li>
        <li className='profile__user-data-item'>
          <h4 className='profile__user-data-title'>E-mail</h4>
          <input className="profile__user-data-input" type="text" value={values.email} id="name-input" name='name' minLength="2" maxLength="30" required onChange={onChangeInput}/>
        </li>
      </ul>
      <p className='profile__user-data-errors'>{errors.nameError}{errors.emailError}</p>
      <button className='profile__button profile__button_type_edit' disabled={(errors.nameError || errors.emailError || ((values.name === userName) && (values.email === userEmail)))} onClick={() => onSubmit(values.name, values.email)}>Редактировать</button>
      <button className='profile__button profile__button_type_exit' onClick={onSignOut}>Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;