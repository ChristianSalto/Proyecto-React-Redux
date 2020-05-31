export const getStateUser = state => state.user;
export const getStateAds = state => state.ads;
// export const getState = () => initialState;

export const getLimit = () => 6;


export const saveUser = (username, registered) => {
  const user = {
    username: username,
    registered: registered,
  };
  return user;
}

export const createAdvert = ({
  name, number,
  description, type, photo,
  work, motor, lifestyle, mobile,
}) => {
  let f = [];
  f.push(work, motor, lifestyle, mobile);
  let tags = f.filter(tag => tag.checked).map(tag => tag.value);
  const ads = {
    tags: tags,
    name: name.value,
    price: parseInt(number.value, 10),
    description: description.value,
    type: type.value,
    photo: photo.value
  }

  return ads;
}

// export const selectHandleLogin = async (fetchSuccess, userSession, user, event, history) => {
//     event.preventDefault();
//     const { username, password } = event.target;
//     const { data } = await getLogin(username.value, password.value);
//     if (data.success) {
//         user = saveUser(username.value, data.success);
//         userSession(user);
//         localStorage.setItem("user", JSON.stringify(user));
//         localStorage.setItem("success", data.success)
//         fetchSuccess(data.success);
//         history.push('/listAds');
//         // } else if (data.success) {
//         //     user = saveUser(username.value, data.success);
//         //     userSession(user);
//         //     localStorage.setItem("user", JSON.stringify(user));
//         //     localStorage.setItem("success", data.success)
//         //     fetchSuccess(data.success);
//         //     history.push('/listAds');
//     } else {
//         return data.error
//     }
// }

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