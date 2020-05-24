import * as TYPES from './types';

const initialState = {
    user: [],
    ads: [],
    ui: {
        success: false,
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

export function ui(state = initialState.ui, action) {
    switch (action.type) {

        case TYPES.FETCH_SUCCESS:
            return {
                ...state,
                success : action.success,
            }

        case TYPES.FETCH_REGISTER_SUCCESS:
            return {
                ...state,
            }

        default:
            return state
    }
}