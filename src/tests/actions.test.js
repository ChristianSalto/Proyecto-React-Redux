import * as axios from 'axios';
import * as action from '../store/action';
import * as TYPES from '../store/types';
//import MockAdapter from 'axios-mock-adapter';
//import * as api from '../services/api';
import {
  getAds,
  filterAds,
  getLogin,
  getAllAds,
  editAds,
} from '../services/api';

//console.log(MockAdapter);

jest.mock('axios');
jest.mock('../services/api', () => ({
  __esModule: true,
  default: 'mockedDefaultExport',
  getAds: jest.fn(),
}));

describe('actions', () => {
  // describe('fetchRequest', () => {
  //   test('should create one FETCH_REQUEST action', () => {
  //     const expectAction = {
  //       type: TYPES.FETCH_REQUEST,
  //     };
  //     expect(action.fetchRequest()).toEqual(expectAction);
  //   });
  // });

  // describe('fetchFailure', () => {
  //   test('should create one FETCH_FAILURE action with error', () => {
  //     const error = 'Error....';
  //     const expectAction = {
  //       type: TYPES.FETCH_FAILURE,
  //       error,
  //     };
  //     expect(action.fetchFailure(error)).toEqual(expectAction);
  //   });
  // });

  // describe('fetchSuccess', () => {
  //   test('should create one FETCH_SUCCESS action with success', () => {
  //     const success = true;
  //     const expectAction = {
  //       type: TYPES.FETCH_SUCCESS,
  //       success,
  //     };
  //     expect(action.fetchSuccess(success)).toEqual(expectAction);
  //     expect(action.fetchSuccess(success)).toEqual({
  //       success: true,
  //       type: 'FETCH_SUCCESS',
  //     });
  //   });
  // });

  // describe('fetchAds', () => {
  //   test('should create one FETCH_ADS action with ads', () => {
  //     const ads = [];
  //     const expectAction = {
  //       type: TYPES.FETCH_ADS,
  //       ads,
  //     };
  //     expect(action.fetchAds(ads)).toEqual(expectAction);
  //   });
  // });

  // describe('msjAds', () => {
  //   test('should create one MSJ_ADS action with msj', () => {
  //     const msj = '';
  //     const expectAction = {
  //       type: TYPES.MSJ_ADS,
  //       msj,
  //     };
  //     expect(action.msjAds(msj)).toEqual(expectAction);
  //   });
  // });

  // describe('userSession', () => {
  //   test('should create one USER_SESSION action with user', () => {
  //     const user = [];
  //     const expectAction = {
  //       type: TYPES.USER_SESSION,
  //       user,
  //     };
  //     expect(action.userSession(user)).toEqual(expectAction);
  //   });
  // });

  // describe('fetchResultCreatAds', () => {
  //   test('should create one FETCH_RESULTS_CREAT_ADS action with result', () => {
  //     const result = [];
  //     const expectAction = {
  //       type: TYPES.FETCH_RESULTS_CREAT_ADS,
  //       result,
  //     };
  //     expect(action.fetchResultCreatAds(result)).toEqual(expectAction);
  //   });
  // });

  /**
   * ---> Funciones asyncronas
   */

  describe('getAdvert', () => {
    const dispatch = jest.fn();
    const error = '';
    const ads = [];
    const getLimit = 6;

    test('should dispatch an FETCH_REQUEST action', async () => {
      await action.getAdvert(dispatch, getLimit);
      const mock = new MockAdapter("axios");
      
      // getAds.mockImplementation(() => ads);

     console.log(getAds);

      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.FETCH_REQUEST,
      });

      // expect(getAds).toHaveBeenCalled();
    

      // expect(dispatch).toHaveBeenCalledWith({
      //   type: TYPES.FETCH_ADS,
      //   ads,
      // });

      // expect(dispatch).toHaveBeenCalledWith({
      //   type: TYPES.FETCH_FAILURE,
      //   error,
      // });
    });
  });
});
