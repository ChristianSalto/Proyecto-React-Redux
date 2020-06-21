import React, { Component } from 'react';
import T from 'prop-types';
import Form from '../Form';
import Input from '../Input/Input';

import { Link } from 'react-router-dom';
import {
  Button,
  Layout,
  FieldContainer,
  FieldTitle,
  FieldError,
} from '../Register/StyleRegister';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  handleLogin = async (event) => {
    const { username, password } = event;
    const { loadLogin } = this.props;
    const data = await loadLogin(username, password);
    if (data) {
      this.setState({ error: data });
      setTimeout(() => this.setState({ error: '' }), 5000);
    }
  };

  render() {
    const { user } = this.props;
    return (
      <Layout>
        <Form
          onSubmit={this.handleLogin}
          initialValue={{ username: '', password: '' }}
        >
          <FieldTitle className="register-title">
            <h1>Login</h1>
          </FieldTitle>
          <FieldContainer>
            <label htmlFor="username">Username</label>
            <Input name="username" type="text" defaultValue={user.username} />
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="password">Password</label>
            <Input name="password" type="password" />
          </FieldContainer>
          <FieldContainer>
            <Button secundary type="submit" className="login-btn">
              Login
            </Button>
            <Link to="/">
              <Button type="button" className="login-btn">
                I'm not registered
              </Button>
            </Link>
          </FieldContainer>
          <FieldError className="error">{this.state.error}</FieldError>
        </Form>
      </Layout>
    );
  }
}

Login.propTypes = {
  password: T.string,
  loadLogin: T.func,
};

export default Login;
