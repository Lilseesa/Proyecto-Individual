import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

axios.defaults.headers = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'Token ',
};

export default axios;