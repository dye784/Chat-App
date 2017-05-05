import { combineReducers } from 'redux';
import AppReducer from './App/AppReducer';
import LoginReducer from './Login/LoginReducer';

const rootReducer = combineReducers({
  auth: LoginReducer,
  app: AppReducer,
});

export default rootReducer;
