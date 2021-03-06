/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import Header from '../components/Header';
import twitterIcon from '../assets/static/google-icon.png';
import googleIcon from '../assets/static/google-icon.png';
import { loginRequest } from '../Action/LoginAction';

const Login = ({ loginRequest, history }) => {

  const [form, setValues] = useState({
    imail: '',
  });

  const hanledInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const hanledSubmit = (e) => {
    e.preventDefault();
    loginRequest(form);
    history.push('/');
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form
            onSubmit={hanledSubmit}
            className='login__container--form'
          >
            <input
              name='imail'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={hanledInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={hanledInput}
            />
            <button
              className='button'
              type='submit'
            >
              Iniciar sesión
            </button>
            <div className='login__container--remember-me'>
              <label>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} />
              {' '}
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} />
              {' '}
              Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            {' '}
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapStateToProps = ({ myList }) => (myList);

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (payload) => dispatch(loginRequest(payload)),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
