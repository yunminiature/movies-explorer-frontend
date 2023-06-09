import React, { useState, useEffect } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { REGEMAIL } from '../../utils/constants';

function SignIn({onSignIn, submitError}){
  const initialValues = {
    email: '',
    password: ''
  }
  const initialErrors = {
    emailError: '',
    passwordError: ''
  }
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isDisabletSubmit, setIsDisabledSubmit] = useState(false);

  useEffect(() => {
    setIsDisabledSubmit(errors.emailError || errors.passwordError || !values.email || !values.password);
  },[errors])

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
      case 'email':
        if (!REGEMAIL.test(value)){
          setErrors({...values,
            emailError:'Поле "E-mail" должно содержать адрес электронной почты',
          });
        } else setErrors({...values,
          emailError:'',
        });
        break;
      case 'password':
        if (value.length===0){
          setErrors({...values,
            passwordError:'Поле "Пароль" не может быть пустым',
          });
        } else if (value.length<8 || value.length>30){
          setErrors({...values,
            passwordError:'Поле "Пароль" должно содержать от 8 до 30 символов',
          });
        } else setErrors({...values,
          passwordError:'',
        });
        break;
      default:
    }
  }

  return(
    <AuthForm
    title='Рады видеть!'
    submit='Войти'
    submitError={submitError}
    isDisabletSubmit={isDisabletSubmit}
    description='Ещё не зарегистрированы?'
    linkText='Регистрация'
    linkTo='/signup'
    onSubmit={(e) => onSignIn(e, values.email, values.password)}>
        <div className='auth-form__input-container'>
          <label className='auth-form__label' htmlFor='email-input'>E-mail</label>
          <input className="auth-form__input" type="email" pattern='^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$' value={values.email} id="email-input" name='email' required onChange={onChangeInput}/>
          <span className="auth-form__error">{errors.emailError}</span>
        </div>
        <div className='auth-form__input-container'>
          <label className='auth-form__label' htmlFor='password-input'>Пароль</label>
          <input className="auth-form__input" type="password" value={values.password} id="password-input" name='password' minLength="8" maxLength="30" required onChange={onChangeInput}/>
          <span className="auth-form__error">{errors.passwordError}</span>
        </div>
      </AuthForm>
  )
}

export default SignIn