import * as TYPES from './types';

export const initialState = {
  user: [],
  ads: [],
  ui: {
    success: false,
    error: '',
  },
};

export function user(state = initialState.user, action) {
  switch (action.type) {
    case TYPES.USER_SESSION:
      return action.user;

    default:
      return state;
  }
}

export function ads(state = initialState.ads, action) {
  switch (action.type) {
    case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        ads: action.data.results, //action.ads,
      };

    case TYPES.MSJ_ADS:
      return {
        ...state,
        msj: action.msj,
      };

    case TYPES.USER_SESSION:
      return {
        ...state,
        ads: action.ads,
      };

    default:
      return state;
  }
}

export function ui(state = initialState.ui, action) {
  switch (action.type) {
    case TYPES.FETCH_REQUEST:
      return {
        ...state,
        success: false,
      };

    case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        success: action.data.success, //action.success,
        error: '',
      };

    case TYPES.FETCH_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case TYPES.FETCH_RESULTS_CREAT_ADS:
      return {
        ...state,
        result: action.result,
      };

    default:
      return state;
  }
}
