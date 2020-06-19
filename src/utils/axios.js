import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

axios.defaults.headers = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'Token e4a86c0e4d9509ca8ae1ccfa2e9c245a040b3b05',
};

export default axios;