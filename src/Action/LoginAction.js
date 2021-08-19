/* eslint-disable import/prefer-default-export */
import { LOGIN_USER, LOGOUT_REQUES, GET_VIDEO_SOURCE } from './Types';
import { store } from '../index.js';

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

export const getVideoSource = (id) => {
  const { originals, trends } = store.getState().HomeReducer.initialState;
  const list = [...originals, ...trends];
  const objectVideo = list.find((item) => item.id === Number(id));

  return ({
    type: GET_VIDEO_SOURCE,
    payload: objectVideo,
  });
};
