import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/Form';


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


