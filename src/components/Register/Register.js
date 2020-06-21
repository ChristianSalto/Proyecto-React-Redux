import React, { Component } from 'react';
//import { getRegister } from '../../services/api';

import { Link } from 'react-router-dom';
import {
  Button,
  Layout,
  FieldContainer,
  FieldTitle,
  FieldError,
} from './StyleRegister';

import Form from '../Form';
import Input from '../Input/Input';
import T from 'prop-types';
//import { saveUser } from '../../store/selectors';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      msj: null,
    };
  }

  // componentDidMount() {
  //   this.props.loadSession();
  //   const { userSession } = this.props
  //   const user = localStorage.getItem("user");
  //   user !== null ? userSession(JSON.parse(user)) : user;
  // }

  handleRegister = async (event) => {
    const { username, password } = event;
    const { getRegister } = this.props;
    const data = await getRegister(username, password);

    if (data.success) {
      // const user = saveUser(username.value, data.success);
      // const { userSession } = this.props;
      // userSession(user);
      // localStorage.setItem('user', JSON.stringify(user));

      this.setState({ msj: 'successfully registered' });
      setTimeout(() => {
        this.props.history.push('/login');
      }, 3000);
    } else {
      this.setState({ error: data.error, success: true });
      setTimeout(() => this.setState({ error: '' }), 5000);
    }
  };

  // alreadyRegistered = () => {
  //     if (this.state.success) {
  //         this.props.history.push('/login', { state: this.state.success });
  //     } else {
  //         this.setState({ error: "Please, you have to register" });
  //         setTimeout(() => this.setState({ error: "" }), 5000);
  //     }
  // }

  render() {
    const { msj } = this.state;
    return (
      <Layout>
        <Form
          onSubmit={this.handleRegister}
          initialValue={{ username: '', password: '' }}
        >
          {msj && <h2>{msj}</h2>}
          <FieldTitle className="register-title">
            <h1>Register</h1>
          </FieldTitle>
          <FieldContainer>
            <label htmlFor="username">Username</label>

            <Input name="username" type="text" />
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="password">Password</label>

            <Input name="password" type="password" />
          </FieldContainer>
          <FieldContainer>
            <Button primary type="submit" className="login-btn">
              Register
            </Button>
            <Link to="/login">
              <Button type="button" className="login-btn">
                I'm already registered
              </Button>
            </Link>
          </FieldContainer>
          <FieldError className="error">{this.state.error}</FieldError>
        </Form>
      </Layout>
    );
  }
}

Register.propTypes = {
  username: T.string,
  password: T.string,
  userSession: T.func,
};

export default Register;
