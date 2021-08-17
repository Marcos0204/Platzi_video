/* eslint-disable jsx-quotes */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/Gravatar';
import { LogoutRequest } from '../Action/LoginAction';

const Header = ({ user, LogoutRequest }) => {
  //<img src={gravatar(user.imail)} alt={user.imail} />
  const hasUser = Object.keys(user).length > 1;
  
  const hanledLogout = () => {
    LogoutRequest();
  };
    return (
      <header className="header">
        <Link to='/'>
          <img className="header__img" src={logo} alt="Platzi Video" />
        </Link>
        <div className="header__menu">
          <div className="header__menu--profile">
            {
              hasUser ? (
                <img src={gravatar(user.imail)} alt={user.imail} />
              ) : (
                <img src={userIcon} alt="" />
              )
            }
            
            <p>Perfil</p>
          </div>
          <ul>
            <li><a href="/">Cuenta</a></li>
            
            <li>
              {
                hasUser ? (
                  <Link
                    onClick={hanledLogout}
                    to='/login'
                  >
                    Cerrar Sesión
                  </Link>
                ) : (
                  <Link to='/login'>
                    Iniciar Sesión
                  </Link>
                )
              }
              
            </li>
          </ul>
        </div>
      </header>
    );
};

Header.defaultProps = {
  user: {

    imail: '',
  },
};

const mapStateToProps = ({ myList }) => {
  return {
    user: myList.users[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutRequest: (payload) => dispatch(LogoutRequest(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
