import React, { Component } from 'react';
import { getRegister } from '../services/api';




class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: ""
        }
    }

    handleRegister = async (event) => {
        event.preventDefault();
        const { username, password } = event.target;
        const { data } = await getRegister(username.value, password.value);
        if (data.success) {
            this.setState({ success: data.success });
            console.log(data.success);
            this.props.history.push('/login');
        } else {
            this.setState({ error: "This user is alredy registered" });
        }
    }

    alreadyRegistered = () => {
        if (this.state.success) {
            this.props.history.push('/login');
        } else {
            this.setState({ error: "Please, you have to register" });
            setTimeout(() => this.setState({ error: "" }), 5000);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleRegister} className="register-container">
                <div className="register-title"><h1>Register</h1></div>
                <div className="input-register">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="login-input" placeholder="Username" required />
                </div>

                <div className="input-register">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="login-input" placeholder="Password" required />
                </div>

                <button type="submit" className="login-btn">Register</button>
                <button type="button" onClick={this.alreadyRegistered} className="login-btn">registered</button>
                <div className="error">{this.state.error}</div>
            </form>
        );
    }
}

export default Register;