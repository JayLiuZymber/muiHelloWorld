/* 
使用Axios你的API都怎麼管理？ - I am Mike - Medium
https://medium.com/i-am-mike/%E4%BD%BF%E7%94%A8axios%E6%99%82%E4%BD%A0%E7%9A%84api%E9%83%BD%E6%80%8E%E9%BA%BC%E7%AE%A1%E7%90%86-557d88365619
 */
import axios from 'axios';

const suppRequest = axios.create({
    // baseURL: 'http://127.0.0.1:8000/supp/'
    baseURL: 'http://localhost:8000/supp/'
});

const custRequest = axios.create({
    // baseURL: 'http://127.0.0.1:8000/cust/'
    baseURL: 'http://localhost:8000/cust/'
});

export const apiSupplier = data => suppRequest.get(`/${data}`);

export const apiCustomer = data => custRequest.get(`/${data}`);