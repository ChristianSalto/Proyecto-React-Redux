import * as TYPES from './types';
import { getAds, filterAds, getLogin, getAllAds } from '../services/api';
import { saveUser } from '../store/selectors';

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

export const fetchAds = ads => ({
    type: TYPES.FETCH_ADS,
    ads,
});

export const msjAds = msj => ({
    type: TYPES.MSJ_ADS,
    msj,
});

export const userSession = user => ({
    type: TYPES.USER_SESSION,
    user,
});




export const loadSession = (dispatch) => {
    const user = localStorage.getItem("user");
    user !== null ? dispatch(userSession(JSON.parse(user))) : user;
}


export const loadLogin = async (dispatch, username, password, { history }) => {
    dispatch(fetchRequest());
    const { data } = await getLogin(username, password);
    if (data.success) {
        const user = saveUser(username, data.success);
        dispatch(userSession(user));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("success", data.success)
        dispatch(fetchSuccess(data.success));
        history.push('/listAds');
    } else {
        dispatch(fetchFailure(data.error));
        return data.error
    }

}


export const getAdvert = async (dispatch, getLimit) => {
    dispatch(fetchRequest());
    try {
        const { data } = await getAds(getLimit);
        dispatch(fetchAds(data.results));
        dispatch(fetchSuccess(data.success));
    } catch (err) {
        dispatch(fetchFailure(err));
    }
}

export const filterAdvert = async (dispatch, filter, limit) => {

    if (filter.fields === "Fields") {
        dispatch(getAdvert);
        return;
    }
    dispatch(fetchRequest());
    try {
        const { data } = await filterAds(filter, limit);
        dispatch(fetchAds(data.results));
        dispatch(fetchSuccess(data.success));
    } catch (err) {
        dispatch(fetchFailure(err));
    }
}


export const handleSearch = async (dispatch, name, limit) => {
    dispatch(fetchRequest());
    try {
        const { data } = await filterAds({ name: name }, limit);
        const { results } = data;
        if (results.length === 0) {
            const { data } = await filterAds({ tag: name }, limit);
            const { results } = data;
            if (results.length === 0) {
                dispatch(fetchAds(results));
                dispatch(fetchSuccess(data.success));
                dispatch(msjAds("we are so sorry we don't have those ads"))
            } else {
                dispatch(fetchAds(results));
                dispatch(fetchSuccess(data.success));
                dispatch(msjAds(""));
            }
        } else {
            dispatch(fetchAds(results));
            dispatch(fetchSuccess(data.success));
            dispatch(msjAds(""));
        }
    } catch (err) {
        dispatch(fetchFailure(err));
    }
}


export const handleAllAds = () => {
    
}
