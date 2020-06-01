import * as reducers from '../store/reducers';
import * as TYPES from '../store/types';

describe('reducers', () => {
  describe('user', () => {
    test('should handle a USER_SESSION action', () => {
      const initialState = [];
      const user = [{ username: 'pepe', registered: true }];
      const action = {
        type: TYPES.USER_SESSION,
        user,
      };
      const expectedState = user;
      expect(reducers.user(initialState, action)).toEqual(expectedState);
    });
  });

  describe('ads', () => {
    test('should handle a MSJ_ADS action', () => {
      const initialState = {};
      const msj = "we are so sorry we don't have those ads";
      const action = {
        type: TYPES.MSJ_ADS,
        msj,
      };
      const expectedState = { msj: msj };
      expect(reducers.ads(initialState, action)).toEqual(expectedState);
    });
  });
});
