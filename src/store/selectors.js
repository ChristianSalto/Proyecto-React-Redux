import { getLogin } from '../services/api';
//import Error from '../components/Error/Error';

export const getStateUser = state => state.user;

export const saveUser = (username, registered) => {
    const user = {
        username: username,
        registered: registered,
    };
    return user;
}


export const selectHandleLogin = async (fetchSuccess, userSession, user, event, history) => {
    event.preventDefault();
    const { username, password } = event.target;
    const { data } = await getLogin(username.value, password.value);
    if (data.success) {
        user = saveUser(username.value, data.success);
        userSession(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("success", data.success)
        fetchSuccess(data.success);
        history.push('/listAds');
        // } else if (data.success) {
        //     user = saveUser(username.value, data.success);
        //     userSession(user);
        //     localStorage.setItem("user", JSON.stringify(user));
        //     localStorage.setItem("success", data.success)
        //     fetchSuccess(data.success);
        //     history.push('/listAds');
    } else {
        return data.error
    }
}

  //  handleLogin = async (event) => {
    //     event.preventDefault();
    //     const { username, password } = event.target;
    //     const { data } = await getLogin(username.value, password.value);
    //     console.log(data);
    //     sessionStorage.setItem("success", data.success);
    //     if (data.success) {
    //         this.setState({ success: data.success });
    //         this.props.history.push('/listAds');
    //     } else {
    //         this.setState({ error: "Sorry, but this user doesn't exist" });
    //         setTimeout(() => this.setState({ error: "" }), 5000);
    //     }
    // }