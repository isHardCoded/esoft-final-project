import React from 'react'
import peopleImage from '../../assets/images/peopleImage.svg';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        console.log(data);
    };
  
    return (
    <div className='auth'>
        <div className="authContent">
            <h1>Добро пожаловать!</h1>
            <img src={peopleImage} alt="authImage" />
            <div>
                <h4>Нет аккаунта?</h4>
                <Link to="/register"><button>Регистрация</button></Link>
            </div>
        </div>
        <div className="authForm">
            <h2>Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className='input'>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        {...register('username', { required: true, maxLength: 15 })}
                        className={errors.username ? 'error' : ''} required/>
                    <label htmlFor="username">Имя пользователя</label>
                </div>
                <div className='input'>
                    <input 
                        type="text" 
                        name="password" 
                        id="password" 
                        {...register('password', { required: true })}
                        className={errors.password ? 'error' : ''} required/>
                    <label htmlFor="password">Пароль</label>
                </div>
            </div>
            {/* <Link to="/home"></Link> */}
            <button type="submit">Войти</button>
        </form>
        </div>
    </div>
  )
}

export default Login
