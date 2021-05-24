import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5050' });

export const sendMail = (data) => API.post('/email', data);
