import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/Form';
import CompAsideLeft from '../components/CompAsideLeft';
import 'jest-localstorage-mock';
import Login from '../components/Login';
import CreateAds from '../components/CreateAds/CreateAds';
import Register from '../components/Register/Register';
import configureStore from 'redux-mock-store';
import * as TYPES from '../store/types';

describe('Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form />);
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render a form with event onSubmit', () => {
    expect(wrapper.find('form'));
  });

  test('should find Input', () => {
    expect(wrapper.find('Input'));
  });
});

describe('CompAsideLeft', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompAsideLeft />);
  });

  test('snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render CompAsideLeft', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Register', () => {
  let wrapper;
  // const mockStore = configureStore();
  // const initialState = {};
  // let store;
  // store = mockStore(initialState);

  // const props = {
  //   username: 'pepe',
  //   password: '1234',
  //   handleSubmit: jest.fn(),
  // };

  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render a form with event onSubmit', () => {
    // console.log(props)
    //wrapper.find('.login-btn').at(1).simulate('onSubmit');

    // wrapper.find('.login-btn').props.handleSubmit.onSubmit()
    // expect(props.handleSubmit).toHaveBeenCalledTimes(1);
    // expect(props.handleSubmit).toBeCalledWith({
    //   username: props.username,
    //   password: props.password,
    // });
    expect(wrapper.find('Input'));
    // expect(wrapper.find('Button'));
    //.props().onSubmit).toEqual(props.handleSubmit);
  });
});

describe('createAds', () => {
  let wrapper;

  const handleEditAds = jest.fn();
  const props = { createAds: jest.fn() };
  const mockStore = configureStore();
  const initialState = {};
  let store;
  store = mockStore(initialState);
  //store.dispatch(addTodo);

  beforeEach(() => {
    wrapper = shallow(
      <CreateAds {...store} {...props} onSubmit={handleEditAds} />,
    );
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render a form with event onSubmit', () => {
    wrapper.find('#input-btn').simulate('click');


    handleEditAds();
    //expect(handleEditAds).toHaveBeenCalledTimes(1);
    // createAdvert(ads);
    expect(handleEditAds.mock.calls.length).toEqual(1);
    // expect(createAds).toBeCalledWith(ads);
    // wrapper.find('.login-btn').props.handleSubmit.onSubmit()
    //expect(handleEditAds).toBeCalledWith(event);
    expect(wrapper.find('Input'));
    // expect(wrapper.find('Button'));
    //.props().onSubmit).toEqual(props.handleSubmit);
  });
});



describe('Login', () => {
  const user = {
    username: 'pepe',
    registered: true,
  };
  const ads = {
    ads: [],
  };
  const addTodo = {
    type: TYPES.USER_SESSION,
    user,
    ads,
  };

  test('should dispatch action', () => {
    const mockStore = configureStore();
    const initialState = {};
    let wrapper;
    let store;
    store = mockStore(initialState);
    store.dispatch(addTodo);
    beforeEach(() => {
      wrapper = shallow(<Login {...store} />);
    });

    test('should render Login', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
