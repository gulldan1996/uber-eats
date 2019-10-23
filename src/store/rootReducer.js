import { ACTION_TYPE } from './actions';

const initialState = {
  restaurantsData: null,
  isLoading: false,
  error: null,
  search: '',
};

export function rootReducer(state = initialState, action) {
  // console.log('object', state);
  switch (action.type) {
    case ACTION_TYPE.SAVE_RESTOURANTS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantsData: payload,
      };
    }

    case ACTION_TYPE.SET_LOAD_RESTAURANTS_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload,
        restaurantsListData: null,
      };
    }

    case ACTION_TYPE.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPE.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ACTION_TYPE.SEARCH_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        search: payload,
      };
    }

    default:
      return state;
  }
}
