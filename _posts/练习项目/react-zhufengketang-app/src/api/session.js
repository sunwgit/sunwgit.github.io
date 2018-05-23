import axios from './index';
export function login(userInfo) {
    return axios.post('/login', userInfo);
}
export function reg(userInfo) {
    return axios.post('/reg', userInfo);
}
export function validate() {
    return axios.get('/validate');
}
