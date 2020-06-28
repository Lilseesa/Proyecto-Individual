import axios from 'axios';

//const NODE_ENV = process.env.NODE_ENV || 'development';

axios.defaults.baseURL = 'https://api.github.com';

console.log(process.env);

axios.defaults.headers = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: process.env.REACT_APP_KEY,
};

export default axios;