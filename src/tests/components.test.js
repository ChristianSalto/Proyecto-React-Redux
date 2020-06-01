import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/Form';
import CompAsideLeft from '../components/CompAsideLeft';
import Login from '../components/Login';
import configureStore from 'redux-mock-store';
import * as TYPES from '../store/types';

describe('Form', () => {
  const props = {
    handleForm: () => {},
    error: '',
    name: 'Login',
    path: '/',
    color: 'secundary',
    nameButton: "I'm not registered",
    value: '',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form {...props} />);
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render a form with event onSubmit', () => {
    expect(wrapper.find('form').props().onSubmit).toEqual(props.handleForm);
  });

  test('should render a form', () => {
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

describe('Login', () => {
  const user = {
    username: 'pepe',
    registered: true,
  };
  const addTodo = {
    type: TYPES.USER_SESSION,
    user,
  };

  test('should dispatch action', () => {
    const mockStore = configureStore();
    const initialState = {};
    let wrapper;
    let store;
    store = mockStore(initialState);
    store.dispatch(addTodo);
    beforeEach(() => {
      wrapper = shallow(<Login store={store} />);
    });

    test('should render Login', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
