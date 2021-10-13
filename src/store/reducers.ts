import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import weatherReducer from './weather';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  weather: weatherReducer,
});
