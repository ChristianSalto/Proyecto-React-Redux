import React, { Component } from 'react';
import Form from '../Form';
import T from 'prop-types';

//import React from 'react';

// import { Link } from 'react-router-dom';
//import { getLogin } from '../../services/api';

//import { selectHandleLogin } from '../../store/selectors'
// import { Button, Layout, Input, FieldContainer, FieldTitle, FieldError } from '../Register/StyleRegister';



class Login extends Component {
    //const { registered, msj } = location.state;
    //console.log(registered, msj)
    constructor(props) {
        //debugger
        super(props);
        this.state = {
            error: "",
            username: "",
        }
    }


    componentDidMount() {
        this.props.loadSession();
        const user = localStorage.getItem("user");
        if (user === null) return
        const { username } = JSON.parse(user);
        username ? this.setState({
            username: username
        }) : this.setState({
            username: "",
        })
    }


    handleLogin = async (event) => {
        event.preventDefault();
        const { username, password } = event.target;
        const { loadLogin } = this.props;
        const data = await loadLogin(username.value, password.value);
        if (data) {
            this.setState({ error: data });
            setTimeout(() => this.setState({ error: "" }), 5000);
        }

    }

    render() {
        return (
            <Form
                handleForm={this.handleLogin}
                error={this.state.error}
                name="Login"
                path="/"
                color="secundary"
                nameButton="I'm not registered"
                value={this.state.username}
            />
        );
    }
}


Login.propTypes = {
    username: T.string,
    password: T.string,
    loadLogin: T.func,
}


export default Login; 