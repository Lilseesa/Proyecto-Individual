import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

axios.defaults.headers = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'Token 01608af3d2331902798bcb3277c645197e2c6f7e',
};

export default axios;