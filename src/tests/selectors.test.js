import * as selectors from '../store/selectors';

describe('selectors', () => {
  test('should save user to object', () => {
    const user = {
      username: 'pepe',
      registered: true,
    };
    expect(selectors.saveUser('pepe', true)).toEqual(user);
  });

  test('should get limit', () => {
    const limit = 6;
    expect(selectors.getLimit()).toEqual(limit);
  });

  test('should create an ads', () => {
    const ads = {
      tags: ['work'],
      name: 'botas',
      price: 20,
      description: 'botas de trabajo',
      type: 'buy',
      photo: 'no-photo',
    };

    const crateAds = {
      name: {
        value: 'botas',
      },
      number: {
        value: '20',
      },
      description: {
        value: 'botas de trabajo',
      },
      type: {
        value: 'buy',
      },
      photo: {
        value: 'no-photo',
      },

      work: {
        value: 'work',
        checked: true,
      },
      motor: {
        value: 'motor',
        checked: false,
      },
      lifestyle: {
        value: 'lifestyle',
        checked: false,
      },
      mobile: {
        value: 'mobile',
        checked: false,
      },
    };
    expect(selectors.createAdvert(crateAds)).toEqual(ads);
  });
});
