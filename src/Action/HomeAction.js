/* eslint-disable import/prefer-default-export */
import { SET_FAVORITE } from './Types';

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});
