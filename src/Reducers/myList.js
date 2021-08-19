/* eslint-disable no-case-declarations */
import { SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_USER,
  LOGOUT_REQUES,
  GET_VIDEO_SOURCE,
} from '../Action/Types';

const initialState = {
  mylist: [],
  users: [],
  playing: {},
};

const myList = (state = initialState, action) => {

  switch (action.type) {
    case SET_FAVORITE:
      const exist = state.mylist.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };

      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload),
      };
    case LOGIN_USER:
      return {
        ...state,
        users: [action.payload],
      };
    case LOGOUT_REQUES:
      return {
        ...state,
        users: [],
      };
    case GET_VIDEO_SOURCE:
      return {
        ...state,
        playing: action.payload,
      };
    default:
      return state;
  }
};

export default myList;
