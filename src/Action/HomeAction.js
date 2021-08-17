/* eslint-disable import/prefer-default-export */
import { SET_FAVORITE, DELETE_FAVORITE } from './Types';

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: DELETE_FAVORITE,
  payload,
});
