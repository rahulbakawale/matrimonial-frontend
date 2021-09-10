import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        'access-token': localStorage.user && JSON.parse(localStorage.user)['access-token'],
        'client': localStorage.user && JSON.parse(localStorage.user)['client'],
        'uid': localStorage.user && JSON.parse(localStorage.user)['uid'],
    }
});

export default axiosInstance