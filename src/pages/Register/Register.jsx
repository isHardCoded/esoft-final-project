import React from 'react'
import peopleImage from '../../assets/images/peopleImage.svg';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <div className='auth register'>
        <div className="authContent">
            <h1>isHardCoded</h1>
            <img src={peopleImage} alt="authImage" />
            <div>
                <h4>Есть аккаунт?</h4>
                <a href="#"><button>Вход</button></a>
            </div>
        </div>
        <div className="authForm">
            <h2>Регистрация</h2>
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
                        name="email" 
                        id="email" 
                        {...register('email', { required: true })}
                        className={errors.email ? 'error' : ''} required/>
                    <label htmlFor="email">Почта</label>
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
                <div className='input'>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        {...register('name', { required: true })}
                        className={errors.name ? 'error' : ''} required/>
                    <label htmlFor="name">Имя</label>
                </div>
            </div>
            {/* <Link to="/home"></Link> */}
            <button type="submit">Зарегистрироваться</button>
        </form>
        </div>
    </div>
  )
}

export default Register
