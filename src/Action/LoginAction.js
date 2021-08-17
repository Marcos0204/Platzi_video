/* eslint-disable import/prefer-default-export */
import { LOGIN_USER, LOGOUT_REQUES } from './Types';

export const loginRequest = (payload) => {
  return ({
    type: LOGIN_USER,
    payload,
  });
};

export const LogoutRequest = (payload) => ({
  type: LOGOUT_REQUES,
  payload,
});
