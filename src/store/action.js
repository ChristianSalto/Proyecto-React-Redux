/* eslint-disable */

import * as TYPES from './types';
import {
  getAds,
  filterAds,
  getLogin,
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

export const fetchSuccess = (success) => ({
  type: TYPES.FETCH_SUCCESS,
  success,
});

export const fetchAds = (ads) => ({
  type: TYPES.FETCH_ADS,
  ads,
});

export const msjAds = (msj) => ({
  type: TYPES.MSJ_ADS,
  msj,
});

export const userSession = (user) => ({
  type: TYPES.USER_SESSION,
  user,
});

export const fetchResultCreatAds = (result) => ({
  type: TYPES.FETCH_RESULTS_CREAT_ADS,
  result,
});

export const loadSession = () => (dispatch) => {
  const user = localStorage.getItem('user');
  user !== null ? dispatch(userSession(JSON.parse(user))) : user;
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
    localStorage.setItem('success', data.success);
    dispatch(fetchSuccess(data.success));
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
    dispatch(fetchAds(data.results));
    dispatch(fetchSuccess(data.success));
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
    dispatch(fetchAds(data.results));
    dispatch(fetchSuccess(data.success));
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
        dispatch(fetchAds(results));
        dispatch(fetchSuccess(data.success));
        dispatch(msjAds("we are so sorry we don't have those ads"));
      } else {
        dispatch(fetchAds(results));
        dispatch(fetchSuccess(data.success));
        dispatch(msjAds(''));
      }
    } else {
      dispatch(fetchAds(results));
      dispatch(fetchSuccess(data.success));
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
    dispatch(fetchAds(data.results));
    dispatch(fetchSuccess(data.success));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};

export const createAds = (ads) => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const { data } = await editAds(ads);
    dispatch(fetchSuccess(data.success));
    dispatch(fetchResultCreatAds(data.result));
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};
