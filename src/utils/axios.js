import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

axios.defaults.headers = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'Token 10d2de5e81ed021a2b2db73e3bee91ecc2924a72',
};

export default axios;
