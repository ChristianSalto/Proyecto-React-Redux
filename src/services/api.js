import axios from 'axios';
const URL = 'http://34.89.93.186:8080/';

export const getRegister = (name, pass) => {
    return axios.post(`${URL}apiv1/register`, {
        username: name,
        password: pass
    }).then(response => {
        return response;
    }).catch(error => {
        const data = error.response
        return data;
    });
};

export const getLogin = (name, pass) => {
    return axios.post(`${URL}apiv1/login`, {
        username: name,
        password: pass
    }, { withCredentials: true })
        .then(response => {
            return response;
        }).catch(error => {
            const data = error.response
            return data;
        });
};

export const getAds = (limit) => {
    return axios.get(`${URL}apiv1/anuncios?limit=${limit}`, {
        withCredentials: true
    }
    ).then(response => {
        return response;
    }).catch(error => {
        console.log(error);
        return error;
    });
};

export const getAllAds = () => {
    return axios.get(`${URL}apiv1/anuncios?`, {
        withCredentials: true
    }
    ).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
};

export const filterAds = (params, number) => {
    return axios.get(`${URL}apiv1/anuncios?limit=${number}`, {
        withCredentials: true,
        params: params
    }
    ).then(response => {
        return response;
    }).catch(error => {
        if (error.response.status === 422) {
            return getAds();
        } else {
            return error;
        }
    });
};



export const editAds = (params) => {
    return axios.post(`${URL}apiv1/anuncios?`, params, {
        withCredentials: true
    }
    ).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
}



