import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getLogin } from '../services/api';
import Cookies from 'js-cookie'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: ""
        }
    }

    handleLogin = async (event) => {
        event.preventDefault();
        const { username, password } = event.target;
        const { data } = await getLogin(username.value, password.value);
        if (data.success) {
            Cookies.set('success', data.success);
            this.setState({ success: data.success });
            console.log(data.success);
            this.props.history.push('/listAds');
        } else {
            this.setState({ error: "This user is alredy registered" });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin} className="login-container">
                    <div className="login-title"><h1>Login</h1></div>
                    <div className="input-login">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username" required />
                    </div>

                    <div className="input-login">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" required />
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>
                <Link to="/">
                    <button type="button">I'm not registered</button>
                </Link>
                <div className="error">{this.state.error}</div>
            </div>
        );
    }
}


export default Login; 