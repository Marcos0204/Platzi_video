import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import myList from './myList';

const rootReducers = combineReducers({
  HomeReducer,
  myList,
});

export default rootReducers;
