import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

axios.defaults.headers = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'Token 2e4f4e7c31823df848b8ccbfc114483b90432781',
};

export default axios;
