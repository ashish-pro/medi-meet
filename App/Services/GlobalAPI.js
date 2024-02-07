import axios from "axios";

const BASE_URL = "http://192.168.1.9:1337/api"

const API_KEY = "12b2cb7f7008443d2d60de1f8468f2c056a0c9e554adaf861f7bf9fc0f81d61e894bc6a405f0fe17739836c628baea95954261acb10836e9ec386df9ad1e61ea267006b4bc63f7953198f8ac01dcdaab7df99d581eba0423d3b7aa6f7e47a449cf7a3957f44f38aad9369592e6f84973104e275e7762c5b2e25185315c23ec86"

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': "Bearer" + API_KEY
    }
});

const getSlider = () => AxiosInstance.get("/sliders?populate=*");

const getCategories = () => AxiosInstance.get("/categories?populate=*");

const getPremiumHospitals = ()=> AxiosInstance.get('/hospitals?filters[Premium][$eq]=true&populate=*');

export default {
    getSlider,
    getCategories,
    getPremiumHospitals
}