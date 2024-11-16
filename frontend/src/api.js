import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchCustomers = () => API.get('/customers');
export const addCustomer = (customerData) => API.post('/customers', customerData);
export const fetchOrders = () => API.get('/orders');
export const addOrder = (orderData) => API.post('/orders', orderData);
