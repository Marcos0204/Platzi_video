import { SET_FAVORITE, DELETE_FAVORITE } from '../Action/Types';

const initialState = {
  mylist: [],
};

const myList = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        mylist: [...state.mylist, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        mylist: state.mylist.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default myList;
