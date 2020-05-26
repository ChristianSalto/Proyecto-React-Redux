import * as TYPES from './types';

const initialState = {
    user: [],
    ads: [],
    ui: {
        success: false,
        error: "",
    }
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
        case TYPES.FETCH_ADS:
            return {
                ...state,
                ads: action.ads,
            }

        case TYPES.MSJ_ADS:
            return {
                ...state,
                msj: action.msj
            }

        default:
            return state
    }
}



export function ui(state = initialState.ui, action) {
    switch (action.type) {

        case TYPES.FETCH_REQUEST:
            return {
                ...state,
                success: false,
            }

        case TYPES.FETCH_SUCCESS:
            return {
                ...state,
                success: action.success,
                error: "",
            }

        case TYPES.FETCH_FAILURE:
            return {
                ...state,
                error: action.error
            }

        default:
            return state
    }
}