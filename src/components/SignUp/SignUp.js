import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { regEmail } from '../../utils/constants';

function SignUp (){
  const initialValues = {
    name: '',
    email: '',
    password: ''
  }
  const initialErrors = {
    nameError: '',
    emailError: '',
    passwordError: ''
  }
  const [values, setValues] = useState(initialValues);
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
    <AuthForm title='Добро пожаловать!' submit='Зарегистрироваться' description='Уже зарегистрированы?' linkText='Войти' linkTo='/signin'>
        <div className='auth-form__input-container'>
          <label className='auth-form__label' for='name-input'>Имя</label>
          <input className="auth-form__input" type="text" value={values.name} id="name-input" name='name' minLength="2" maxLength="30" required onChange={onChangeInput}/>
          <span className="auth-form__error">{errors.nameError}</span>
        </div>
        <div className='auth-form__input-container'>
          <label className='auth-form__label' for='email-input'>E-mail</label>
          <input className="auth-form__input" type="email" pattern='^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$' value={values.email} id="email-input" name='email' required onChange={onChangeInput}/>
          <span className="auth-form__error">{errors.emailError}</span>
        </div>
        <div className='auth-form__input-container'>
          <label className='auth-form__label' for='password-input'>Пароль</label>
          <input className="auth-form__input" type="password" value={values.password} id="password-input" name='password' minLength="8" maxLength="30" required onChange={onChangeInput}/>
          <span className="auth-form__error">{errors.passwordError}</span>
        </div>
      </AuthForm>
  )
}

export default SignUp;