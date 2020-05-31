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
            // <Layout>
            //     <form onSubmit={this.handleLogin} className="login-container">
            //         <FieldTitle className="login-title"><h1>Login</h1></FieldTitle>
            //         <FieldContainer className="input-login">
            //             <label htmlFor="username">Username</label>
            //             <Input type="text"
            //                 name="username"
            //                 className="login-input"
            //                 placeholder="Username"
            //                 defaultValue={this.state.username}
            //                 required />
            //         </FieldContainer>

            //         <FieldContainer className="input-login">
            //             <label htmlFor="password">Password</label>
            //             <Input type="password" name="password" className="login-input" placeholder="Password" required />
            //         </FieldContainer>
            //         <FieldContainer>
            //             <Button type="submit" className="login-btn">Login</Button>

            //             <Link to="/">
            //                 <Button secundary type="button">I'm not registered</Button>
            //             </Link>
            //         </FieldContainer>
            //         <FieldError className="error">{this.state.error}</FieldError>
            //     </form>
            // </Layout>
        );
    }
}


Login.propTypes = {
    username: T.string,
    password: T.string,
    loadLogin: T.func,
}


export default Login; 