import React, { Component } from 'react';

//import React from 'react';

import { Link } from 'react-router-dom';
//import { getLogin } from '../../services/api';

import { selectHandleLogin } from '../../store/selectors'
import { Button, Layout, Input, FieldContainer, FieldTitle, FieldError } from '../Register/StyleRegister';



class Login extends Component {
    //const { registered, msj } = location.state;
    //console.log(registered, msj)
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
    }


    handleLogin = async (event) => {
        const { user, userSession, history, fetchSuccess } = this.props;
        const data = await selectHandleLogin(fetchSuccess, userSession, user, event, history);
        this.setState({ error: data });
        setTimeout(() => this.setState({ error: "" }), 5000);

    }

    render() {
        return (
            <Layout>
                <form onSubmit={this.handleLogin} className="login-container">
                    <FieldTitle className="login-title"><h1>Login</h1></FieldTitle>
                    <FieldContainer className="input-login">
                        <label htmlFor="username">Username</label>
                        <Input type="text" name="username" className="login-input" placeholder="Username" required />
                    </FieldContainer>

                    <FieldContainer className="input-login">
                        <label htmlFor="password">Password</label>
                        <Input type="password" name="password" className="login-input" placeholder="Password" required />
                    </FieldContainer>
                    <FieldContainer>
                        <Button type="submit" className="login-btn">Login</Button>

                        <Link to="/">
                            <Button secundary type="button">I'm not registered</Button>
                        </Link>
                    </FieldContainer>
                    <FieldError className="error">{this.state.error}</FieldError>
                </form>
            </Layout>
        );
    }
}


export default Login; 