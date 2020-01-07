import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.timeout = 15000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const instance = axios.create();
// 添加请求拦截器，在请求头中加token
instance.interceptors.request.use(
    config => {
      if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
      }
   
      return config;
    },
    error => {
      return Promise.reject(error);
    });
export default instance;
