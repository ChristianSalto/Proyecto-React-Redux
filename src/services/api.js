import axios from 'axios';
const URL = 'http://34.89.93.186:8080/'

export const getRegister = async (name, pass) => {
    return await axios.post(`${URL}apiv1/register`, {
        username: name,
        password: pass
    }).then(response => {
        return response;
    }).catch(error => {
        console.log(error);
        //  return error;
    });
};

export const getLogin = async (name, pass) => {
    return await axios.post(`${URL}apiv1/login`, {
        username: name,
        password: pass
    }, { withCredentials: true })
        .then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error);
            //  return error;
        });
};

export const getAds = async () => {
    return await axios.get(`${URL}apiv1/anuncios`, {
        withCredentials: true
    }
    ).then(response => {
        return response;
    }).catch(error => {
        console.log(error);
        //  return error;
    });
};

export default { getRegister, getLogin, getAds };

