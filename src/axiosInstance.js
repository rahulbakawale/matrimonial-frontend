import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://wedded-raghu.herokuapp.com/api/v1/mobiles/verify',
    timeout: 1000,
    headers: {
        'access-token': localStorage.user && JSON.parse(localStorage.user)['access-token'],
        'client': localStorage.user && JSON.parse(localStorage.user)['client'],
        'uid': localStorage.user && JSON.parse(localStorage.user)['uid'],
    }
  });

export default axiosInstance