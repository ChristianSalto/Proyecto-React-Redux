/* eslint-disable */

import * as TYPES from './types';
import {
  getAds,
  filterAds,
  getLogin,
  getRegister,
  getAllAds,
  editAds,
} from '../services/api';
import { saveUser } from '../store/selectors';

export const fetchRequest = () => ({
  type: TYPES.FETCH_REQUEST,
});

export const fetchFailure = (error) => ({
  type: TYPES.FETCH_FAILURE,
  error,
});

export const fetchSuccess = (data) => ({
  type: TYPES.FETCH_SUCCESS,
  data,
});



export const msjAds = (msj) => ({
  type: TYPES.MSJ_ADS,
  msj,
});

export const userSession = (user, ads) => ({
  type: TYPES.USER_SESSION,
  user,
  ads,
});

export const fetchResultCreatAds = (result) => ({
  type: TYPES.FETCH_RESULTS_CREAT_ADS,
  result,
});



export const loadRegister = (username, password) => async (dispatch) => {
  dispatch(fetchRequest());
  const { data } = await getRegister(username, password);
  if (data.success) {
    dispatch(fetchSuccess(data));
    return data;
  } else {
    dispatch(fetchFailure(data.error));
    return data;
  }
};

export const loadLogin = (username, password, { history }) => async (
  dispatch,
) => {
  dispatch(fetchRequest());
  const { data } = await getLogin(username, password);
  if (data.success) {
    const user = saveUser(username, data.success);
    dispatch(userSession(user));
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(fetchSuccess(data));
    history.push('/listAds');
  } else {
    dispatch(fetchFailure(data.error));
    return data.error;
  }
};

export const getAdvert = (getLimit) => async (dispatch, getState) => {
  dispatch(fetchRequest());
  try {
    const { data } = await getAds(getLimit);
    dispatch(fetchSuccess(data));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const filterAdvert = (filter, limit) => async (dispatch, getState) => {
  if (filter.fields === 'Fields') {
    dispatch(getAdvert(limit));
    return;
  }
  dispatch(fetchRequest());
  try {
    const { data } = await filterAds(filter, limit);
    dispatch(fetchSuccess(data));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const handleSearch = (name, limit) => async (dispatch, getState) => {
  dispatch(fetchRequest());
  try {
    const { data } = await filterAds({ name: name }, limit);
    const { results } = data;
    if (results.length === 0) {
      const { data } = await filterAds({ tag: name }, limit);
      const { results } = data;
      if (results.length === 0) {
        dispatch(fetchSuccess(data));
        dispatch(msjAds("we are so sorry we don't have those ads"));
      } else {
        dispatch(fetchSuccess(data));
        dispatch(msjAds(''));
      }
    } else {
      dispatch(fetchSuccess(data));
      dispatch(msjAds(''));
    }
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const handleAllAds = () => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const { data } = await getAllAds();
    dispatch(fetchSuccess(data));
    return data.results;
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const createAds = (ads) => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const { data } = await editAds(ads);
    dispatch(fetchSuccess(data));
    dispatch(fetchResultCreatAds(data.result));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};
