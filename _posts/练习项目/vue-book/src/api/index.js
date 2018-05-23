import axios from "axios";
//获取数据模块
axios.defaults.baseURL = "http://localhost:5000";
axios.interceptors.response.use(function(response) {
    return response.data;
});
export let getSliders = () => axios.get("/sliders"); //swiper
export let getHotBooks = () => axios.get("/hotBooks"); //热门图书
export let getHome = () => axios.all([getSliders(), getHotBooks()]);
export let getBooks = flag => axios.get(`/books?dest=${flag}`); //获取所有图书
export let removeBook = (id, flag) =>
    axios.get(`/delete?id=${id}&dest=${flag}`); //删除图书
export let getInfoById = bid => axios.get("/getInfo?id=" + bid); //获取一本书籍信息
export let updateInfo = (url, book) => axios.post(url, book);
export let collectBook = book => axios.post("/collect", book);
