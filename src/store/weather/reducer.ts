import { AnyAction } from 'redux';
import { WeatherState } from './types';
import * as actionTypes from './actionTypes';

const initialState: WeatherState = {};

const reducer = (state = initialState, action: AnyAction): WeatherState => {
  switch (action.type) {
    case actionTypes.SET_LOADING: {
      const { locationId, value } = action.payload;
      return {
        ...state,
        [locationId]: { ...state[locationId], loading: value },
      };
    }
    case actionTypes.SET_WEATHER: {
      const { locationId, weather } = action.payload;
      return {
        ...state,
        [locationId]: { ...state[locationId], data: weather },
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
