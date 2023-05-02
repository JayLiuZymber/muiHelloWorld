/*
使用Axios你的API都怎麼管理？ - I am Mike - Medium
https://medium.com/i-am-mike/%E4%BD%BF%E7%94%A8axios%E6%99%82%E4%BD%A0%E7%9A%84api%E9%83%BD%E6%80%8E%E9%BA%BC%E7%AE%A1%E7%90%86-557d88365619
 */
import axios from 'axios';

// const URL = 'http://127.0.0.1'
const URL = 'http://localhost'
const PORT = 8000

const urlRoot = axios.create({
    // baseURL: 'http://127.0.0.1:8000'
    // baseURL: 'http://localhost:8000'
    baseURL: `${URL}:${PORT}`
});
// -----------------------------------------------------------------------------

const urlSupplier = axios.create({
    // baseURL: 'http://127.0.0.1:8000/supp/'
    // baseURL: 'http://localhost:8000/supp/'
    baseURL: `${URL}:${PORT}/supp/`
});
const urlSupplierRoot = axios.create({
    // baseURL: 'http://localhost:8000/'
    baseURL: `${URL}:${PORT}/supps/`
});

export const getSupplier = (taxid) => urlSupplier.get(`${taxid}`);
export const deleteSupplier = (taxid) => urlSupplier.delete(`${taxid}`);
export const postSupplier = (taxid, name) => urlSupplierRoot.post('', {
    taxid: taxid,
    name: name
});

// -----------------------------------------------------------------------------

const urlProductRoot = axios.create({
    // baseURL: 'http://localhost:8000/prods/'
    baseURL: `${URL}:${PORT}/prods/`
})

export const getAllProducts = () => urlProductRoot.get();
export const getProucts = (taxid) => urlSupplier.get(`${taxid}/prods/`);
export const getProuct = (taxid, part_number) => urlSupplier.get(`${taxid}/prod/${part_number}`);
export const deleteProuct = (taxid, part_number) => urlSupplier.delete(`${taxid}/prod/${part_number}`);
export const postProduct = (taxid, part_number, name) => urlSupplier.post(`${taxid}/prod`, {
    port_number: part_number,
    name: name
});

// -----------------------------------------------------------------------------

const urlCustomer = axios.create({
    // baseURL: 'http://127.0.0.1:8000/cust/'
    // baseURL: 'http://localhost:8000/cust/'
    baseURL: `${URL}:${PORT}/cust/`
});
const urlCustomerRoot = axios.create({
    // baseURL: 'http://localhost:8000/custs/'
    baseURL: `${URL}:${PORT}/custs/`
});

export const getCustomer = (taxid) => urlCustomer.get(`${taxid}`);
export const deleteCustomer = (taxid) => urlCustomer.delete(`${taxid}`);
export const postCustomer = (taxid, name) => urlCustomerRoot.post('', {
    taxid: taxid,
    name: name
});

// -----------------------------------------------------------------------------

const urlPurchaseOrder = axios.create({
    // baseURL: 'http://localhost:8000/po/'
    baseURL: `${URL}:${PORT}/po/`
})
const urlPurchaseOrderById = axios.create({
    // baseURL: 'http://localhost:8000/po/'
    baseURL: `${URL}:${PORT}/po_id/`
})

// -----------------------------------------------------------------------------

const urlSalesOrder = axios.create({
    // baseURL: 'http://localhost:8000/so/'
    baseURL: `${URL}:${PORT}/so/`
})
const urlSalesOrderById = axios.create({
    // baseURL: 'http://localhost:8000/so/'
    baseURL: `${URL}:${PORT}/so_id/`
})

// -----------------------------------------------------------------------------
