import { SET_FAVORITE } from '../Action/Types';

const initialState = {
  mylist: [],
};

const myList = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    default:
      return state;
  }
};

export default myList;
