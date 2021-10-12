import { AnyAction } from 'redux';
import { unionBy } from 'lodash-es';
import { LocationState } from './types';
import * as actionTypes from './actionTypes';

const initialState: LocationState = {
  loading: false,
  list: [],
};

const reducer = (state = initialState, action: AnyAction): LocationState => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.SET_LOCATIONS:
      return {
        ...state,
        list: unionBy([...state.list, ...action.payload], 'id'),
      };
    default:
      return { ...state };
  }
};

export default reducer;
