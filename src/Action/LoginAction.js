/* eslint-disable import/prefer-default-export */
import { LOGIN_USER } from './Types';

export const loginRequest = (payload) => {
  console.log(payload);
  return ({
    type: LOGIN_USER,
    payload,
  });
};
