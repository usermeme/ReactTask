import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import weatherReducer from './weather';
import locationReducer from './location';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  weather: weatherReducer,
  location: locationReducer,
});
