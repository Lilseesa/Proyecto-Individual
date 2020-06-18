import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

axios.defaults.headers = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'Token 83190d382d64af0c3d4ef5387021142d3e48e5be',
};

export default axios;