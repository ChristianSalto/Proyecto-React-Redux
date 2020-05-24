import * as TYPES from './types';
// import { getRegister } from '../services/api';

export const fetchRequest = () => ({
    type: TYPES.FETCH_REQUEST,
});

export const fetchFailure = error => ({
    type: TYPES.FETCH_FAILURE,
    error,
});

export const fetchSuccess = (success) => ({
    type: TYPES.FETCH_SUCCESS,
    success,
})


// export const fetchRegisterSuccess = () => ({
//     type: TYPES.FETCH_REGISTER_SUCCESS,
// });

// export const fetchAdsSuccess = ads => ({
//     type: TYPES.FETCH_ADS_SUCCESS,
//     ads,
// });




export const userSession = user => ({
    type: TYPES.USER_SESSION,
    user,
});



// export const fetchLogin = () => async (dispatch) => {

// }



// export const fetchRegister = () => async (dispatch, getState) => {

// }