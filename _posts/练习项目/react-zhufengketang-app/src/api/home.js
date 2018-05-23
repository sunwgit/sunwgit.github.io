import axios from './index';
export function getSlider() {
    return axios.get('/slider');
}
export function getLesson(offset, limit, type) {
    return axios.get(`/list?offset=${offset}&limit=${limit}&type=${type}`);
}
