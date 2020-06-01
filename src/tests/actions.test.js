import * as action from '../store/action';
import * as TYPES from '../store/types';
import { getAds } from '../services/api';

jest.mock('../services/api', () => ({
  __esModule: true,
  default: 'mockedDefaultExport',
  getAds: jest.fn(),
}));

describe('actions', () => {
  describe('fetchRequest', () => {
    test('should create one FETCH_REQUEST action', () => {
      const expectAction = {
        type: TYPES.FETCH_REQUEST,
      };
      expect(action.fetchRequest()).toEqual(expectAction);
    });
  });

  describe('fetchFailure', () => {
    test('should create one FETCH_FAILURE action with error', () => {
      const error = 'Error....';
      const expectAction = {
        type: TYPES.FETCH_FAILURE,
        error,
      };
      expect(action.fetchFailure(error)).toEqual(expectAction);
    });
  });

  describe('fetchSuccess', () => {
    test('should create one FETCH_SUCCESS action with success', () => {
      const success = true;
      const expectAction = {
        type: TYPES.FETCH_SUCCESS,
        success,
      };
      expect(action.fetchSuccess(success)).toEqual(expectAction);
      expect(action.fetchSuccess(success)).toEqual({
        success: true,
        type: 'FETCH_SUCCESS',
      });
    });
  });

  describe('fetchAds', () => {
    test('should create one FETCH_ADS action with ads', () => {
      const ads = [];
      const expectAction = {
        type: TYPES.FETCH_ADS,
        ads,
      };
      expect(action.fetchAds(ads)).toEqual(expectAction);
    });
  });

  describe('msjAds', () => {
    test('should create one MSJ_ADS action with msj', () => {
      const msj = '';
      const expectAction = {
        type: TYPES.MSJ_ADS,
        msj,
      };
      expect(action.msjAds(msj)).toEqual(expectAction);
    });
  });

  describe('userSession', () => {
    test('should create one USER_SESSION action with user', () => {
      const user = [];
      const expectAction = {
        type: TYPES.USER_SESSION,
        user,
      };
      expect(action.userSession(user)).toEqual(expectAction);
    });
  });

  describe('fetchResultCreatAds', () => {
    test('should create one FETCH_RESULTS_CREAT_ADS action with result', () => {
      const result = [];
      const expectAction = {
        type: TYPES.FETCH_RESULTS_CREAT_ADS,
        result,
      };
      expect(action.fetchResultCreatAds(result)).toEqual(expectAction);
    });
  });

  /**
   * ---> Funciones asyncronas
   */

  describe('getAdvert', () => {
    test('should dispatch an FETCH_REQUEST,FETCH_ADS and FETCH_SUCCESS action', async () => {
      const getState = () => {};
      const ad = {
        data: {
          results: [{}],
          success: true,
        },
      };

      const getLimit = 6;
      const dispatch = jest.fn();
      const actions = action.getAdvert(getLimit);
      getAds.mockImplementation(() => Promise.resolve(ad));

      await actions(dispatch, getState);

      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.FETCH_REQUEST,
      });

      getAds(getLimit).then((data) => {
        expect(data).toBe(ad);
      });

      const ads = ad.data.results;
      const success = ad.data.success;

      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.FETCH_ADS,
        ads,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.FETCH_SUCCESS,
        success,
      });
    });

    test('should dispatch an FETCH_FAILURE action', async () => {
      const getState = () => {};
      const error = '';
      const getLimit = 6;
      const dispatch = jest.fn();
      const actions = action.getAdvert(getLimit);
      getAds.mockImplementation(() => Promise.reject(error));

      await actions(dispatch, getState);

      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.FETCH_REQUEST,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.FETCH_FAILURE,
        error,
      });
    });
  });
});
