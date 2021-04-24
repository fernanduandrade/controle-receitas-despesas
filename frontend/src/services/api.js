import axios from 'axios';

const api = axios.create({
    baseURL: "localhost:8000/api/budge/"
});

export default api;