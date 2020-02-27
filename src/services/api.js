import axios from 'axios';
const URL = 'http://34.89.93.186:8080/'

export const getRegister = async (name, pass) => {
    return await axios.post(`${URL}apiv1/register`, {
        username: name,
        password: pass
    }).then(response => {
        return response;
    }).catch(error => {
        // console.log(error.response.data);
        const data = error.response
        // console.log(data)
        return data;
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
            const data = error.response
            console.log(data)
            return data;
        });
};

export const getAds = async () => {
    return await axios.get(`${URL}apiv1/anuncios?limit=10`, {
        withCredentials: true
    }
    ).then(response => {
        return response;
    }).catch(error => {
        console.log(error)
        return error;
    });
};

export const filterAds = async (params, number) => {
    return await axios.get(`${URL}apiv1/anuncios?limit=${number}`, {
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


export const editAds = async (params) => {
    debugger
    return await axios.put(`${URL}apiv1/anuncios?id=<%20ID%20de%20MongoDB%20>`, {
        withCredentials: true,
        params: params
    }
    ).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
}

export default { getRegister, getLogin, getAds };

